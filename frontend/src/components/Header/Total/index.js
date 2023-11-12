import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAllProducts } from '../../../store/selectors'

const TotalWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`

const TotalContent = styled.span`
  font-size: 1.2rem;
  margin-left: 20px;
  margin-top: 20px;
  color: blue;
`

export const Total = () => {
  const numOfProducts = useSelector(getAllProducts).length

  return (
    <TotalWrapper>
      <TotalContent>סה״כ: {numOfProducts} מוצרים</TotalContent>
    </TotalWrapper>
  )
}