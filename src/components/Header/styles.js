import styled from "styled-components";

export const HeaderContainer = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 0 10px;
    background-color: #e3293b;
`
// #DB5461
export const LogoPokeball = styled.img`
    width: 45px;
    cursor: pointer;

    &:hover{
        transition: all 600ms;
        transform: scale(1.1);
    }
`
export const LogoPokeDev = styled.img`
    width: 160px;
    cursor: pointer;

    &:hover{
        transition: all 600ms;
        transform: scale(1.1);
    }

    &:active {
    position:relative;
    top:1px;
}
`

export const IrParaPokedex = styled.img`
    width: 160px;
    cursor: pointer;
    &:hover{
        transition: all 600ms;
        transform: scale(1.1);
    }
`

export const GoToPokedexContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 215px;
    margin-right: 15px;

    &:active {
    position:relative;
    top:1px;
}
`
