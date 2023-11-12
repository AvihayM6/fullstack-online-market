import styled from 'styled-components'
import Divider from '@mui/material/Divider'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useDispatch } from 'react-redux'
import { removeSingleProduct, fetchProducts } from '../../../store/Products'


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

export const ProductSummary = ({ category, products}) => {
  const dispatch = useDispatch()
  

  const deleteProduct = async (productId) => {
    await dispatch(removeSingleProduct(productId))
    dispatch(fetchProducts())
  }

  return (
    <ProductSummaryWrapper>
      <ProductSummaryTitleContainer>
        <ProductSummaryTitle>{category} - {products.length} מוצרים</ProductSummaryTitle>
      </ProductSummaryTitleContainer>
      <Divider />
      <ProductSummaryListContainer>
      
      {
        products.map(product => {
          return <ProductItemContainer key={product._id}>
                  {product.productName} <DeleteOutlineIcon sx={{cursor:'pointer'}}
                                                           onClick={() => deleteProduct(product._id)}/>
                  </ProductItemContainer>
        })
      }
      </ProductSummaryListContainer>
    </ProductSummaryWrapper>
  )
}