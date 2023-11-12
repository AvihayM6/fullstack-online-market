import {createSelector} from '@reduxjs/toolkit'
import { groupBy }  from 'lodash-es'

export const getProductToAdd = (state) => state.products.productToAdd

export const getAllCategories = (state) => state.products.categories

export const getIsDeleted = (state) => state.products.isDeleted

export const getAllProducts = (state) => state.products.products

export const getProductsAsMapByCategory = createSelector(
    getAllProducts,
    (products) => {
        return groupBy(products, 'category')
    }
)

export const getProductsAsMapByName = createSelector(
    getAllProducts,
    (products) => {
        return groupBy(products, 'productName')
    }
)