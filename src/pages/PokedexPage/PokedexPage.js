import React from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import pokeballIcon from "../../images/pokeball-icon.png"
import { BarContainer, PokedexPageContainer, NumContainer, MainContainer, PokemonContainer, ListPokedexContainer } from "./styles";
import pokeballWhiteIcon from "../../images/pokeballWhite-icon.png";
import {goToDetails} from '../../routes/Coordinator'


function PokedexPage() {

    const history = useHistory()

    return (

        <div>
            <Header />
            <PokedexPageContainer>
                <BarContainer>
                    <h1>Pokédex</h1>
                    <NumContainer>
                        <img src={pokeballIcon} />
                        <p>30</p>
                    </NumContainer>
                </BarContainer>
                <MainContainer>
                    <PokemonContainer>
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"} alt={"Foto do Charizard"} />
                        <button onClick={goToDetails}>Detalhes</button>
                    </PokemonContainer>
                    <ListPokedexContainer>
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/6.png"}/>
                        <p>Charizard</p>
                        <img src={pokeballWhiteIcon}/>
                    </ListPokedexContainer>
                </MainContainer>
            </PokedexPageContainer>
        </div>

    )
}

export default PokedexPage