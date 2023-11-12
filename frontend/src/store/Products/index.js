import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { CATEGORIES } from "../../constants"

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('http://localhost:8000/products')
  return response.data
})

export const addProduct = createAsyncThunk('products/addProduct', async (product) => {
  const response = await axios.post('http://localhost:8000/products', {
    productName: product.productName,
    category: product.category,
  })
  return response.data
})

export const removeSingleProduct = createAsyncThunk('todos/removeSingleProduct', async (productId) => {
const response = await axios.delete(`http://localhost:8000/products/${productId}`,{ data: { _id: productId } })
  return response.data
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
      categories: CATEGORIES,
      products: [],
      productToAdd: {productName: '', category: ''},
    },
    reducers: {
      addNewStateProduct: (state, { payload }) => {
        state.productToAdd = payload
      },

      cleanStateProduct: (state) => {
        state.productToAdd = {productName: '', category: ''}
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        console.log('start')
        state.products = action.payload
      })
      builder.addCase(addProduct.fulfilled, (state, action) => {
        const newProduct = action.payload
        state.products = [...state.products, newProduct]
      })
      builder.addCase(removeSingleProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => {
            return product._id !== action.payload
          }
        )
      })

    },
})

export const { addNewStateProduct, cleanStateProduct } = productsSlice.actions
export default productsSlice.reducer