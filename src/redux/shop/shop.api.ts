import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../api/api";
import { AxiosResponse } from "axios";
import { IProduct } from "../../types/Type";

const url = `https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media`
const token = '&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74&category=ipad'

export const getProducts = createAsyncThunk(
     "shop/getProducts",
     async () => {
          try {
               const response: AxiosResponse<IProduct[]> = await apiInstance.get(url + token)
               return response.data
          } catch (error) {
               throw error
          }
     }
)