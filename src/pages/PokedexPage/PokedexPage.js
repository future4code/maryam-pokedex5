import React from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import pokeballIcon from "../../images/pokeball-icon.png"
import { BarContainer, PokedexPageContainer, NumContainer, MainContainer, PokemonContainer, ListPokedexContainer, ListContainer, DetailContainerList } from "./styles";
import pokeballWhiteIcon from "../../images/pokeballWhite-icon.png";
import { goToDetails } from '../../routes/Coordinator';
import { GlobalContext } from "../../contexts/GlobalContext";
import { useState } from "react";
import { useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import { getPokemons } from "../../services/requests";

function PokedexPage() {
    const [image , setImage] = useState("")

    const { states, setters } = useContext(GlobalContext)
    const { pokemonDetails, pokemonsPokedex } = states
    const { setPokemons, setPokemonDetails, setPokemonPokedex } = setters
    const history = useHistory()


    const renderPokemonsList = pokemonsPokedex.map((pokemon) => {
        return (
            <ListPokedexContainer key={pokemon.name}>
                <DetailContainerList onClick={() => onClickImage(pokemon.sprites.other.dream_world.front_default)}>
                    <img src={pokemon.sprites.versions["generation-viii"].icons.front_default}/>
                    <p>{pokemon.name}</p>
                    <img src={pokeballWhiteIcon}/>
                </DetailContainerList>
            </ListPokedexContainer>
        )
    })

    const CleanPokedex = () => {
        setPokemonPokedex([])
        getPokemons(setPokemons)
        setImage("")
    }
    const onClickImage = (url) => {
        setImage(url)
    }

    return (
        <PokedexContext.Provider value={{image , setImage}}>
            <Header />
            <PokedexPageContainer>
                <BarContainer>
                    <h1>Pokédex</h1>
                    <button onClick={CleanPokedex}>Limpar Pokédex</button>
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