import styled from 'styled-components'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import rtlPlugin from 'stylis-plugin-rtl'
import { prefixer } from 'stylis'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import {direction} from '../../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories, getProductToAdd } from '../../../store/selectors'
import { addNewStateProduct } from '../../../store/Products'

const FormSelectWrapper = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 100%;
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
export const FormSelect = () => {
  const categories = useSelector(getAllCategories)
  const productToAdd = useSelector(getProductToAdd)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(addNewStateProduct({...productToAdd, category: event.target.value}))
  }
  
  return (
    <FormSelectWrapper>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <RtlDiv>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">קטגוריה</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={productToAdd.category}
                label="category"
                onChange={handleChange}>
                {categories.map(category => <MenuItem value={category.value} key={category.value}>{category.name}</MenuItem>)}
              </Select>
            </FormControl>
          </RtlDiv>
        </ThemeProvider>
      </CacheProvider>
    </FormSelectWrapper>
  )
}