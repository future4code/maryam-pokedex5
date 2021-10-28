import styled from "styled-components";

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: #e0bbbf;
    height: auto;
    min-height: 100vh;
    padding-bottom: 50px;
    color: #1C3144;
    text-shadow: 1px 1px #1C3144;
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    row-gap: 30px;
    column-gap: 30px;
`

export const SingleCardContainer = styled.div`
    width: 250px;
    height: 300px;
    background-color: #1C3144;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    color: white;
    font-size: 16px;
    box-shadow: 5px 5px 10px 2px #1C3144;
    text-transform: capitalize;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 210px;
    height: 38px;
    cursor:pointer;
    }

    &:hover{
        transition: all 800ms;
        transform: scale(1.05);
        position:relative;
        box-shadow: 5px 5px 10px 2px #e3293b;
    }
`

export const SelectCategory = styled.select`
    margin-bottom: 50px;
    margin-top: 20px;
	background-color:#db5462;
	border-radius:19px;
	border:2px solid #db5462;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	font-size:18px;
	padding:6px 15px;
	text-decoration:none;
	text-shadow:0px 1px 0px #8f313a;

&:hover {
	background-color:#b0444f;
} 

&:active {
	position:relative;
	top:1px;
}
`

export const PokeballImage = styled.img`
    width: 30px;
`

export const PokedexImage = styled.a`
    width: auto;

    &:hover {
    img{
        transition: all 600ms;
        transform: scale(1.1);
    }
}
    &:active {
    position:relative;
    top:1px;
}
`
export const DetalhesImage = styled.a`
    width: auto;

    &:hover {
    img{
        transition: all 600ms;
        transform: scale(1.1);
    }
}
    &:active {
    position:relative;
    top:1px;
}
`

export const ImagePokemon = styled.img`
    width: 100px;
    max-height: 120px;
    height: 120px;
`

export const PokemonNameCard = styled.p`
    background-color: #52af59;
    color: white;
    text-shadow: 2px 2px 2px black;
    height: 28px;
    border-radius: 19px;
    padding-left: 50px;
    padding-right: 50px;
    align-self: flex-start;
    margin-left: 0px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 2px 2px #296b37;
`
