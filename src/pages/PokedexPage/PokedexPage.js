import React from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import pokeballIcon from "../../images/pokeball-icon.png"
import { BarContainer, PokedexPageContainer, NumContainer, MainContainer, PokemonContainer, ListPokedexContainer, ListContainer, DetailContainerList, Buttons, CartPokedex} from "./styles";
import pokeballWhiteIcon from "../../images/pokeballWhite-icon.png";
import { goToDetails } from '../../routes/Coordinator';
import { GlobalContext } from "../../contexts/GlobalContext";
import { useState } from "react";
import { useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import { getPokemons } from "../../services/requests";
import detalhes from "../../images/Detalhes.png"
import remover from "../../images/Remover-da-pokedex.png"
import pokedex from "../../images/Pokedex.png"
import limpar from "../../images/Limpar-PokedeX.png"

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
            <CartPokedex>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                <Buttons>
                    <a onClick={() => removeFromPokedex(pokemon)}><img src={remover} alt="Remover" /></a>
                    <a onClick={() => goToDetails(history, pokemon.name)}><img src={detalhes} alt="Detalhes"/></a> 
                </Buttons>
            </CartPokedex>
        )
    }


    return (
        <PokedexContext.Provider value={{image , setImage}}>
            <Header />
            <PokedexPageContainer>
                <BarContainer>
                    <img src={pokedex} alt='Pokédex'/>
                    <a onClick={CleanPokedex}><img src={limpar} alt='Limpar Tela'/></a>
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