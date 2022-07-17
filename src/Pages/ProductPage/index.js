import React, { useContext } from "react";
import { Cards } from "../../components/Cards";
import { Header } from "../../components/Header";
import { useRequestData } from "../../hooks/useRequestData";
import { FieldText } from "./FieldeText";
import * as Styled from "./styled";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { BASE_URL } from "../../constants/BASE_URL";
import { CircularProgress } from '@material-ui/core';


export const ProductPage = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { cart, searchS } = states
    const { setCart } = setters
    const sear = searchS
    const { data } = useRequestData(`${BASE_URL}/productAll?name=${sear}`)

    const addItemToCart = (newItem) => {
        const index = cart.findIndex((i) => i.id === newItem.id)
        const newCart = [...cart]

        if (index === -1) {
            const cartItem = { ...newItem, quantity: 1 }
            newCart.push(cartItem)
        } else {
            newCart[index].quantity = newCart[index].quantity + 1
        }
        setCart(newCart)
    }

    const product = data?.map((item) => {
        return <Cards key={item.id} product={item} addItemToCart={addItemToCart} />
    })

    return (
        <Styled.ProductPrimary>
            <Header />
            <FieldText />
            <Styled.ProductContent>
                {product ? product : <CircularProgress />}
            </Styled.ProductContent>
        </Styled.ProductPrimary>
    )
}