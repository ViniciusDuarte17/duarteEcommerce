import React from "react";
import { Header } from "../../components/Header";
import { Historic } from "../../components/Historic";
import { useRequestData } from "../../hooks/useRequestData";
import * as Styled from "./styled"
import { BASE_URL } from '../../constants/BASE_URL';


export const HistoricPurchase = () => {
    const userId = 'fca4da71-6e6d-41e4-befb-0aa28bb5860b'
    const { data } = useRequestData(`${BASE_URL}/purchase/${userId}`)

    const historic = data?.map((historic) => {
        return <Historic key={historic} historic={historic} />
    })
    return (
        <Styled.Container>
            <Header />
            <Styled.Content>
                {historic ? historic : <h3>usuário não possui compras</h3>}
            </Styled.Content>
        </Styled.Container>
    )
}