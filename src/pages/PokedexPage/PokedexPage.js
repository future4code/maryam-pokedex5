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
    const { pokemonDetails, pokemonsPokedex, pokemonsHome } = states
    const { setPokemons, setPokemonDetails, setPokemonPokedex , setPokemonsHome } = setters
    const [ imageContainer, setImageContainer ] = useState('')
    const history = useHistory()


    const renderPokemonsList = pokemonsPokedex.map((pokemon) => {
        return (
            <ListPokedexContainer key={pokemon.name}>
                <DetailContainerList onClick={() => onClickImage(pokemon)}>
                    <img src={pokemon.sprites.versions["generation-viii"].icons.front_default}/>
                    <p>{pokemon.name}</p>
                    <img src={pokeballWhiteIcon}/>
                </DetailContainerList>
            </ListPokedexContainer>
        )
    })

    const removeFromPokedex = (pokemon) => {
        const newPokemonsPokedex = [...pokemonsPokedex]
        const index = pokemonsPokedex.findIndex(
            (item) => item.name === pokemon.name
        );

        newPokemonsPokedex.splice(index, 1)
        setPokemonPokedex(newPokemonsPokedex)

        const newPokemons = [...pokemonsHome, pokemon];
        const orderedPokemons = newPokemons.sort((a, b) => {
            return a.id - b.id;
        })
        setPokemonsHome(orderedPokemons)
        setImageContainer('')
    }

    const CleanPokedex = () => {
        setPokemonPokedex([])
        getPokemons(setPokemons)
        setImageContainer('')
    }

    
    const onClickImage = (pokemon) => {
        setImageContainer(
            <div>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                <button onClick={() => removeFromPokedex(pokemon)}>Remover da Pokédex</button>
                <button onClick={goToDetails}>Detalhes</button> 
            </div>
        )
    }

    console.log(typeof(imageContainer))

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
                        {imageContainer}
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