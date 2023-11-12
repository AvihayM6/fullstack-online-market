import styled from 'styled-components'

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #E9ECEF;
`

const TitleContent = styled.h1`
  font-size: 2.2rem;
  margin: 15px 0;
`

export const Title = () => {
  return (
    <TitleWrapper>
      <TitleContent>רשימת קניות</TitleContent>
    </TitleWrapper>
  )
}