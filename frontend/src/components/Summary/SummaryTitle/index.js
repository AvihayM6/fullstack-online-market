import styled from 'styled-components'

const SummaryTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const TitleContent = styled.h1`
  font-size: 1.5rem;
  margin: 15px 0;
  color: #99D9EA;
  @media (max-width: 768px) {
    font-size: 1.17rem;
  }
`

export const SummaryTitle = () => {
  return (
    <SummaryTitleWrapper>
      <TitleContent>יש לאסוף מוצרים אלו במחלקות המתאימות</TitleContent>
    </SummaryTitleWrapper>
  )
}