
import { createSlice } from '@reduxjs/toolkit';
import { addProducts, deleteProducts, fetcthProducts, updateProducts } from '../../actions/product';



const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: any[], isLoading: boolean, error: string }
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetching
        builder.addCase(fetcthProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
        // Adding
        builder.addCase(addProducts.fulfilled, (state, action) => {
            state.products.push(action.payload)
        })
        // Updating
        builder.addCase(updateProducts.fulfilled, (state, action) => {
            const newProduct = action.payload;
            state.products = state.products.map((item: any) => item.id == newProduct.id ? newProduct : item)
        })
        // Deleting
         builder.addCase(deleteProducts.fulfilled, (state, action) => {
            state.products = state.products.filter((item: any) => item.id !== action.payload)
        })
    }
})

export const productReducer = productSlice.reducer;