import styled from "styled-components";

export const ContainerDetail = styled.div`
    width: 100vw;
    height: 90vh;
    border: 1px solid black;
    background-color: #e0bbbf;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    h1{
        text-transform: capitalize;
        text-align: center;
    }    
`

export const CardPhoto = styled.div`
    display: flex;
    background-color: whitesmoke;
    border-radius: 20px;
    box-shadow: 4px 5px gray;
    position: relative;
    left: 25vh;
    top: 5vw;
    margin-bottom: 12vh;
    height: 20%;
    width: 10%;

    img{
        position: relative;
        left: 2vh;
        width: 85%;
    }
`

export const CardPoderes = styled.div`
    position: relative;
    border: 1px solid black;
    background-color: #FAFAFA;
    border-radius: 20px;
    box-shadow: 4px 5px gray;
    padding-left: 1vw;
    width: 40vh;
    height: 50vh;
    top: -56vh;
    left: 30vw;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    h2{
        display: flex;
        justify-content: center;
        color: #DB5461;
    }
    
    h4{
        display: inline;
    }

    div{
        margin-top: 7vh;
    }
    `

export const ContainerTipo = styled.div`
    background-color: #1C3144;
    text-transform: capitalize;
    color: white;
    display: flex;
    text-align: center;
    justify-content: center;
    border: 1px solid black;
    box-shadow: 4px 5px gray;
    position: relative;
    border-radius: 10px;
    padding-left: 5px;
    width: 40vh;
    top: -115.5vh;
    left: 53vw;
`

export const TitleStatus = styled.div`
    display: flex;
    justify-content: center;
    width: 40vh;
    border: 1px solid black;
    border-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 4px 0px gray;
    position: relative;
    top: -55vh;
    left: 30vw;
    background-color: #DB5461;
    color: white;
`

export const ContainerCarcter = styled.div`
    background-color: #FAFAFA;
    position: relative;
    left: 53vw;
    top: -54vw;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 4px 5px gray;
    width: 40vh;
    height: 46vh;

    div{
        margin: 9vh 1vw;
    }

    h2{
        text-align: center;
    }

    h4{
        display: inline;
    }
`

export default {ContainerDetail, CardPhoto, CardPoderes, ContainerTipo, TitleStatus, ContainerCarcter};