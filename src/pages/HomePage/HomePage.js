import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import { HomePageContainer, CardsContainer, SingleCardContainer, SelectCategory } from './styles'

function HomePage() {
    const [id, setId] = useState("1")

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

    const goToDetails = () => {
        history.push("/details/:id")
    }

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
                        <button onClick={goToDetails}>Detalhes</button>
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