import Button from '@mui/material/Button'
import {useDispatch, useSelector} from 'react-redux'
import { addProduct, cleanStateProduct } from '../../../store/Products'
import { getProductToAdd } from '../../../store/selectors'

export const FormButton = () => {
  const dispatch = useDispatch()
  const productToAdd = useSelector(getProductToAdd)

  const addNewProduct = () => {
    if(!productToAdd.productName) return
    else {
      dispatch(addProduct(productToAdd))
      dispatch(cleanStateProduct())
    }
  }

  return (
    <Button variant="outlined" 
            size='large'
            onClick={addNewProduct}>
      הוסף
    </Button>
  )
}