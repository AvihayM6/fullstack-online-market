import styled from 'styled-components'
import Divider from '@mui/material/Divider'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useDispatch, useSelector } from 'react-redux'
import { removeSingleProduct, fetchProducts } from '../../../store/Products'
import { groupBy } from 'lodash-es'
import { useEffect, useState } from 'react'
import { getProductsAsMapByName } from '../../../store/selectors'


const ProductSummaryWrapper = styled.div`
  width: 25rem;
`

const ProductSummaryTitle = styled.h4`
  font-size: 1.5rem;
  margin: 15px 0;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
  }
`

const ProductSummaryTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ProductSummaryListContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`

const ProductItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`
const ProductDisplay = styled.div`
  display: flex;
`
const ProductName = styled.div``
const ProductQuantity = styled.div`
  margin-right: 10px;
`

export const ProductSummary = ({ category, products}) => {
  const dispatch = useDispatch()
  const productsAsMapByName = useSelector(getProductsAsMapByName)
  const deleteProduct = async (productName) => {
    await dispatch(removeSingleProduct(productsAsMapByName[productName][0]._id))
    dispatch(fetchProducts())
  }

  const [productToDisplay, setProductToDisplay] = useState([])

  useEffect(() => {
    setProductToDisplay(groupBy(products, 'productName'))
  }, [products])

  return (
    <ProductSummaryWrapper>
      <ProductSummaryTitleContainer>
        <ProductSummaryTitle>{category} - {products?.length} מוצרים</ProductSummaryTitle>
      </ProductSummaryTitleContainer>
      <Divider />
      <ProductSummaryListContainer>
      
      {
        Object.keys(productToDisplay)?.map(productName => {
          return <ProductItemContainer key={productName}>
                  <ProductDisplay>
                    <ProductName>{productName}</ProductName>
                    <ProductQuantity>({productToDisplay[productName].length})</ProductQuantity>
                  </ProductDisplay>
                  
                  <DeleteOutlineIcon sx={{cursor:'pointer'}} onClick={() => deleteProduct(productName)}/>
                 </ProductItemContainer>
        })
      }
      </ProductSummaryListContainer>
    </ProductSummaryWrapper>
  )
}