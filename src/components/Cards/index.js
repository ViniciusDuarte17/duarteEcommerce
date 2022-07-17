import React from "react";
import * as Styled from "./styled";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Button from "@material-ui/core/Button";

 
export const Cards = ({ product, addItemToCart }) => {
  
  return (
    <Styled.ContainerCard>
      <Styled.Content>
        <Styled.Title >{product.name}</Styled.Title>
        <Styled.Img src={product.imageUrl} alt={product.name} />
      </Styled.Content>
      <Styled.FooterCard>
        <Button
          onClick={() => addItemToCart(product)}
          color="primary"
          aria-label="add">
          <AddCircleOutlineOutlinedIcon />
          <br /> <br />
          <p >Add carrinho</p>
        </Button>
        <h3>price: {product.price}</h3>
      </Styled.FooterCard>

    </Styled.ContainerCard>
  );
}