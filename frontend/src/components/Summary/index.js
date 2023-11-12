import styled from 'styled-components'
import {SummaryTitle} from './SummaryTitle'
import {ProductSummary} from './ProductSummary'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/Products'
import { useEffect } from 'react'
import {getAllCategories, getProductsAsMapByCategory, getProductsAsMapByName} from '../../store/selectors'
import { groupBy } from 'lodash-es'

const SummaryWrapper = styled.div`
  width: 100%;
`

const DisplayContainerCard = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
`

export const Summary = () => {
  const categories = useSelector(getAllCategories)
  const productsByCategory = useSelector(getProductsAsMapByCategory)
  const productsByName = useSelector(getProductsAsMapByName)
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <SummaryWrapper>
      <SummaryTitle />
      <DisplayContainerCard>
      {categories
          .filter(category => productsByCategory[category.value])
          .map(category => {
            return <ProductSummary category={category.name}
                                   products={productsByCategory?.[category.value]}
                                   key={category.name}/>
      })}
      </DisplayContainerCard>
    </SummaryWrapper>
  )
}