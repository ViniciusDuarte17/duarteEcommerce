import React from "react";
import * as Styled from "./styled";

export const Historic = ({ historic }) => {

  return (
    <Styled.ContainerCard>
      <Styled.Content>
        <Styled.Title >{historic.product_name}</Styled.Title>
        <Styled.Img src={historic.imageUrl} alt={historic.product_name} />
      </Styled.Content>
      <Styled.FooterCard>
        <h3>Quantidate : {historic.quantity}</h3>
        <h3>preço total: {historic.totalPrice}</h3>
      </Styled.FooterCard>

    </Styled.ContainerCard>
  );
}