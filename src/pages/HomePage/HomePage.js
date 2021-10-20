
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { HomePageContainer, CardsContainer, SingleCardContainer, SelectCategory } from './styles'
import axios from "axios";
import {goToDetails} from '../../routes/Coordinator'


function HomePage() {
    const [id, setId] = useState("1")


    const { states, setters } = useContext(GlobalContext)

    const { pokemons ,pokemonDetails, pokemonsPokedex } = states
    const { setPokemons, setPokemonDetails, setPokemonPokedex } = setters



    const url = "https://pokeapi.co/api/v2/pokemon/"
    const getPokemons = () => {
        axios.get(url).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }


    const getDetailPokemon = (id) => {
        axios.get(url + id).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }


    const history = useHistory()

    return (
        <div>
            <Header />
            <HomePageContainer>
                <button onClick={() => getDetailPokemon(id)}>teste detail</button>
                <button onClick={getPokemons}>teste pokemons</button>
                <h1>Base de Pokémons</h1>
                <SelectCategory>
                    <option>Categoria</option>
                    <option>Fogo</option>
                </SelectCategory>
                <CardsContainer>
                    <SingleCardContainer>
                        <img alt='foto pokemon' />
                        <p>Nome</p>
                        <button onClick={() =>goToDetails(history)}>Detalhes</button>
                        <button>Adicionar a Pokédex</button>
                    </SingleCardContainer>

                    <SingleCardContainer>
                        <img alt='foto pokemon' />
                        <p>Nome</p>
                        <button onClick={goToDetails}>Detalhes</button>
                        <button>Adicionar</button>
                    </SingleCardContainer>

                    <SingleCardContainer>
                        <img alt='foto pokemon' />
                        <p>Nome</p>
                        <button onClick={goToDetails}>Detalhes</button>
                        <button>Adicionar</button>
                    </SingleCardContainer>

                    <SingleCardContainer>
                        <img alt='foto pokemon' />
                        <p>Nome</p>
                        <button onClick={goToDetails}>Detalhes</button>
                        <button>Adicionar</button>
                    </SingleCardContainer>

                    <SingleCardContainer>
                        <img alt='foto pokemon' />
                        <p>Nome</p>
                        <button onClick={goToDetails}>Detalhes</button>
                        <button>Adicionar</button>
                    </SingleCardContainer>

                    <SingleCardContainer>
                        <img alt='foto pokemon' />
                        <p>Nome</p>
                        <button onClick={goToDetails}>Detalhes</button>
                        <button>Adicionar</button>
                    </SingleCardContainer>

                </CardsContainer>
            </HomePageContainer>
        </div>

    )
}

export default HomePage