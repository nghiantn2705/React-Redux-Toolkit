import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../interface/product";
import axios from "axios"
export const fetcthProducts = createAsyncThunk("product/fetchProducts",async()=>{
    const {data} = await axios.get("http://localhost:3000/products")
    return data
})

export const addProducts = createAsyncThunk("product/addProducts",async(product:any)=>{
    const {data} = await axios.post("http://localhost:3000/products",product)
    return data
})
export const deleteProducts = createAsyncThunk("product/removeProducts",async(id)=>{
    await axios.delete("http://localhost:3000/products/"+id)
    return id
})
export const updateProducts = createAsyncThunk("product/updateProducts",async(product:any)=>{
    const {data} = await axios.put("http://localhost:3000/products/"+product.id,product)
    return data
})

