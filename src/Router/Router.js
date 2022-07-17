import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductPage } from "../Pages/ProductPage"
import { HistoricPurchase } from "../Pages/HistoricPurchase";
import {AddProduct} from "../Pages/AddProduct";
import { PageError } from "../Pages/PageError";


export const Router = () => {
 
    return(
        <BrowserRouter>
         <Routes>
             <Route index element = {<ProductPage />} />
             <Route path="/historic/purchase" element={<HistoricPurchase /> } /> 
             <Route path="/product/create" element={<AddProduct />} />
             <Route path="*" element={<PageError /> } /> 
         </Routes>
        </BrowserRouter>
    )
 }