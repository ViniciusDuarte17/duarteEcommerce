import React from "react";
import { Header } from "../../components/Header";
import { Historic } from "../../components/Historic";
import { useRequestData } from "../../hooks/useRequestData";
import * as Styled from "./styled"
import { BASE_URL } from '../../constants/BASE_URL';


export const HistoricPurchase = () => {
    const userId = '74ff4538-ea07-467b-a60f-aa890a8b39b1'
    const { data } = useRequestData(`${BASE_URL}/purchase/${userId}`)

    const historic = data?.map((historic) => {
        return <Historic key={historic} historic={historic} />
    })
    return (
        <Styled.Container>
            <Header />
            <Styled.Content>
                {historic ? historic : <h1>usuário não possui compras</h1>}
            </Styled.Content>
        </Styled.Container>
    )
}