import { Button } from "@material-ui/core";
import React from "react";
import * as Styled from "./styled"


export const Cart = ({ cart, removeItem }) => {

  return (
    <Styled.ContainerCart>
      <Styled.Content>
        <Styled.Title >{cart.name}</Styled.Title>
        <Styled.Img src={cart.imageUrl} alt={cart.name} />
      </Styled.Content>
      <Styled.FooterCart>
        <span> quantidade : {cart.quantity}</span>
        <span> preço: {cart.price}</span>
        <Button
          onClick={ () => removeItem(cart)}
          color='primary'>
          Remover
        </Button>
      </Styled.FooterCart>
    </Styled.ContainerCart>
  )
}