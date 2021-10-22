import React from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import pokeballIcon from "../../images/pokeball-icon.png"
import { BarContainer, PokedexPageContainer, NumContainer, MainContainer, PokemonContainer, ListPokedexContainer, ListContainer } from "./styles";
import pokeballWhiteIcon from "../../images/pokeballWhite-icon.png";
import { goToDetails } from '../../routes/Coordinator';
import { GlobalContext } from "../../contexts/GlobalContext";
import { useEffect, useState } from "react";
import { useContext } from "react";
import PokeDexList from "../../components/PokedexList/PokedexList";
import { PokedexContext } from "../../contexts/PokedexContext";


function PokedexPage() {
    const [image , setImage] = useState("")

    const { states, setters } = useContext(GlobalContext)
    const { pokemons, pokemonDetails, pokemonsPokedex } = states
    const { setPokemons, setPokemonDetails, setPokemonPokedex } = setters
    const history = useHistory()


    const renderPokemonsList = pokemonsPokedex.map((pokemon) => {
        return (
            <ListPokedexContainer>
                <PokeDexList pokemon={pokemon}/>
            </ListPokedexContainer>
        )
    })

    console.log(pokemonsPokedex)
    // useEffect(() => {
    //     pokemonsPokedex
    // })

    return (
        <PokedexContext.Provider value={{image , setImage}}>
            <Header />
            <PokedexPageContainer>
                <BarContainer>
                    <h1>Pokédex</h1>
                    <NumContainer>
                        <img src={pokeballIcon} />
                        <p>{pokemonsPokedex.length}</p>
                    </NumContainer>
                </BarContainer>
                <MainContainer>
                    <PokemonContainer>
                        {image ? 
                        <div>
                            <img src={image} alt={"Foto do Charizard"} />
                            <button onClick={goToDetails}>Detalhes</button> 
                        </div> : 
                        "Clique em algum pokemon da lista ao lado!"}
                    </PokemonContainer>
                    <ListContainer>
                        {renderPokemonsList}
                    </ListContainer>
                </MainContainer>
            </PokedexPageContainer>
        </PokedexContext.Provider>

    )
}

export default PokedexPage