import { Header } from './components/Header'
import { ProductForm } from './components/ProductForm'
import Divider from '@mui/material/Divider'
import styled from 'styled-components'
import { Summary } from './components/Summary'

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const App = () => {
  return (
    <AppWrapper>
      <Header />
      <ProductForm />
      <Divider />
      <Summary />
    </AppWrapper>
  )
}