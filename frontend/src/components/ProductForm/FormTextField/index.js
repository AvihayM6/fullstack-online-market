import styled from 'styled-components'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import rtlPlugin from 'stylis-plugin-rtl'
import { prefixer } from 'stylis'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import {direction} from '../../../constants'
import { useDispatch } from 'react-redux'
import { addNewStateProduct } from '../../../store/Products'
import { useSelector } from 'react-redux'
import { getProductToAdd } from '../../../store/selectors'


const FormTextFieldWrapper = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    width: 100%;
    margin-left: 10px;
  }
`

const RtlDiv = styled.div`
  direction: ${direction};
`

const theme = createTheme({
  direction: `${direction}`,
})

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

export const FormTextField = () => {
  const productToAdd = useSelector(getProductToAdd)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(addNewStateProduct({...productToAdd, productName: event.target.value}))
  }

  return (
    <FormTextFieldWrapper>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <RtlDiv>
            <TextField label="מוצר"
                       variant="outlined"
                       fullWidth
                       onChange={handleChange}
                       value={productToAdd.productName}/>
          </RtlDiv>
        </ThemeProvider>
      </CacheProvider>
    </FormTextFieldWrapper>
  )
}