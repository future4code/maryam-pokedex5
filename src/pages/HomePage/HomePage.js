import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import { HomePageContainer, CardsContainer, SingleCardContainer, SelectCategory } from './styles';
import { goToDetails } from '../../routes/Coordinator';
import { getDetailPokemon, getPokemons } from '../../services/requests';
import Card from '../../components/HomeCard/HomeCard'


function HomePage() {
    const [id, setId] = useState("1")
    const [pokemons, setPokemons] = useState([])
    const [poke, setPoke] = useState('')
    const history = useHistory()

    useEffect(() => {
        getPokemons(setPokemons)
    }, [])

    const renderPokemons = pokemons.map((pokemon) => {
        return (
            <SingleCardContainer>
                <Card pokemon={pokemon} key={pokemon.url} />
                <p>{pokemon.name}</p>
                <button onClick={() => goToDetails(history)}>Detalhes</button>
                <button>Adicionar a Pokédex</button>
            </SingleCardContainer>
        )
    })

    return (
        <div>
            <Header />
            <HomePageContainer>
                <button onClick={() => getDetailPokemon(id)}>teste detail</button>
                <button /*onClick={getPokemons}*/>teste pokemons</button>
                <h1>Base de Pokémons</h1>
                <SelectCategory>
                    <option>Categoria</option>
                    <option>Fogo</option>
                </SelectCategory>
                <CardsContainer>
                    {renderPokemons}
                    {/* <SingleCardContainer>
                        <img alt='foto pokemon' />
                        <p>Nome</p>
                        <button onClick={() =>goToDetails(history)}>Detalhes</button>
                        <button>Adicionar a Pokédex</button>
                    </SingleCardContainer> */}
                </CardsContainer>
            </HomePageContainer>
        </div>

    )
}

export default HomePage