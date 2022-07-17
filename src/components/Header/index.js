import React from "react";
import * as Styled from "./styled";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HistoryIcon from "@material-ui/icons/History";
import { useNavigate } from "react-router-dom";
import {
    goToCreatePurchase,
    goToHistoric,
    goToHome,
} from "../../Router/coordinator";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <Styled.ContainerHeader>
            <Styled.ButtonHeader>
                <Button color="secondary">
                    <HomeIcon onClick={() => goToHome(navigate)} fontSize="large" />
                    <br /><br/>
                    <p>Home</p>
                </Button>
                <Button onClick={() => goToCreatePurchase(navigate)} color="secondary">
                    <ShoppingCartIcon fontSize="large" />
                    <br /><br />
                    <p>Carrinho</p>
                </Button>
                <Button onClick={() => goToHistoric(navigate)} color="secondary">
                    <HistoryIcon fontSize="large" />
                    <br /> <br />
                    <p>historico</p>
                </Button>
            </Styled.ButtonHeader>
        </Styled.ContainerHeader>
    );
};