import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import { HomePageContainer, CardsContainer, SingleCardContainer, SelectCategory } from './styles';
import { goToDetails } from '../../routes/Coordinator';
import { getPokemons, getDetailPokemon, getPokemonsTypes } from '../../services/requests';
import HomeCard from '../../components/HomeCard/HomeCard';
import { GlobalContext } from "../../contexts/GlobalContext";
import { url } from "../../constants/url";


function HomePage() {
    const { states, setters } = useContext(GlobalContext)
    const { pokemons, pokemonDetails, pokemonsPokedex } = states
    const { setPokemons, setPokemonDetails, setPokemonPokedex } = setters
    const history = useHistory()
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')

    useEffect(() => {
        getPokemons(setPokemons)
    }, [])

    useEffect(() => {
        getPokemonsTypes(setCategories)
    }, [])

    const addToPokedex = (poke) => {
        const position = pokemonsPokedex.findIndex((item) => {
            return item === poke.name;
        })
        const newPokemonsPokedex = [...pokemonsPokedex];
        if (position === -1) {
            newPokemonsPokedex.push(poke)
            setPokemonPokedex(newPokemonsPokedex)
        }
        console.log(pokemonsPokedex)
    }

    const renderPokemons = pokemons
    // .filter((pokemon) => {
    //     return pokemon.
    // })
    .map((pokemon) => {
        return (
            <SingleCardContainer key={pokemon.name}>
                <HomeCard pokemon={pokemon} key={pokemon.url} />
                <p>{pokemon.name}</p>
                <button onClick={() => goToDetails(history, pokemon.name)}>Detalhes</button>
                <button onClick={() => addToPokedex(pokemon)}>Adicionar a Pokédex</button>
            </SingleCardContainer>
        )
    })


    const renderCategories = categories.map((categorie) => {
        return(
            <option key={categorie.name}>{categorie.name}</option>
        )
    })

    return (
        <div>
            <Header />
            <HomePageContainer>
                <h1>Base de Pokémons</h1>
                <SelectCategory>
                    <option>Selecione uma categoria</option>
                    {renderCategories}
                </SelectCategory>
                <CardsContainer>
                    {renderPokemons}
                </CardsContainer>
            </HomePageContainer>
        </div>

    )
}

export default HomePage