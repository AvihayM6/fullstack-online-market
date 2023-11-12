import styled from 'styled-components'
import { Title } from './Title'
import { Total } from './Total'

const HeaderWrapper = styled.div`
  width: 100%;
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <Title />
      <Total />
    </HeaderWrapper>
  )
}