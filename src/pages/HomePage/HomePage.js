import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import { HomePageContainer, CardsContainer, SingleCardContainer, SelectCategory } from './styles';
import { goToDetails } from '../../routes/Coordinator';
import { getPokemons } from '../../services/requests';
import HomeCard from '../../components/HomeCard/HomeCard';
import { GlobalContext } from "../../contexts/GlobalContext";


function HomePage() {
    const { states, setters } = useContext(GlobalContext)
    const { pokemons ,pokemonDetails, pokemonsPokedex } = states
    const { setPokemons, setPokemonDetails, setPokemonPokedex } = setters
    const history = useHistory()

    useEffect(() => {
        getPokemons(setPokemons)
    }, [])

    const addToPokedex = (poke) => {
        const position = pokemonsPokedex.findIndex((item) => {
            return item.name === poke.name;
        })
        const newPokemonsPokedex = [...pokemonsPokedex];
        if (position === -1) {
            newPokemonsPokedex.push(poke)
            setPokemonPokedex(newPokemonsPokedex)
            // localStorage.setItem('listPokedex', pokemonsPokedex)
        } 
        console.log(pokemonsPokedex)
    }

    const renderPokemons = pokemons.map((pokemon) => {
        return (
            <SingleCardContainer key={pokemon.name}>
                <HomeCard pokemon={pokemon} key={pokemon.url} />
                <p>{pokemon.name}</p>
                <button onClick={() => goToDetails(history, pokemon.name)}>Detalhes</button>
                <button onClick={() => addToPokedex(pokemon)}>Adicionar a Pokédex</button>
            </SingleCardContainer>
        )
    })

    return (
        <div>
            <Header />
            <HomePageContainer>
                {console.log(pokemonsPokedex)}
                <h1>Base de Pokémons</h1>
                <SelectCategory>
                    <option>Categoria</option>
                    <option>Fogo</option>
                </SelectCategory>
                <CardsContainer>
                    {renderPokemons}
                </CardsContainer>
            </HomePageContainer>
        </div>

    )
}

export default HomePage