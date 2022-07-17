import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = (props) => {
    const [cart, setCart] = useState([])
    const [searchS, setSearch] = useState('')
    const states = {cart, searchS}
    const setters = {setCart, setSearch}
   
 
    return(
        <GlobalStateContext.Provider value={{states,setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}