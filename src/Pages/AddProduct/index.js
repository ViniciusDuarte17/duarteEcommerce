import { Button } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import * as Styled from "./styled"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { confirmPurchase } from "../../services/confirmPurchase";

export const AddProduct = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { cart } = states
    const { setCart } = setters

    const removeItem = (itemToRemove) => {
        const index = cart.findIndex((i) => i.id === itemToRemove.id)
        const newCart = [...cart]

        if (newCart[index].quantity === 1) {
            newCart.splice(index, 1)
        } else {
            newCart[index].quantity -= 1
        }
        setCart(newCart)
    }

    const productCart = cart?.map((item) => {
        return <Cart key={item.id} cart={item} removeItem={removeItem} />
    })

    let totalPrice = 0

    cart.forEach((prod) => {
        totalPrice += Number(prod.price) * prod.quantity
    })

    const purchase = () => {

        const body = {
            userId: `fca4da71-6e6d-41e4-befb-0aa28bb5860b`,
            productId: cart[0].id,
            quantity: cart[0].quantity
        }
        confirmPurchase(body)
    }
    return (
        <Styled.Container>
            <Header />
            <Styled.Content>
                {productCart.length > 0 ? productCart : <h3>carrinho vazio</h3>}
            </Styled.Content>
            <div>
                {productCart.length > 0 ?
                    <h2>preço total:  R$ {totalPrice} </h2>
                    :
                    <h2>Preço total:R$ 0,00</h2>
                }
            </div>
            <br />
            <div>
                {
                    productCart.length > 0 ?
                        <Button
                            variant="contained"
                            size="large"
                            onClick={purchase}
                            color="primary">
                            Comprar
                        </Button> :
                        <p></p>
                }

            </div>
        </Styled.Container>
    )
}