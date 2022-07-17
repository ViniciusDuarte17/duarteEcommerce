import styled from "styled-components";

export const ContainerCart = styled.div`
    justify-content: center;
    width: 30em;
    height: 25em;
    margin: 0.5em 0;
    position: relative;
    border: solid 1px green;
    overflow: hidden;
`
export const Content = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: blue;
`
export const Title = styled.h2`
    position: absolute;
    color: white;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
`
export const FooterCart = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
 ` 