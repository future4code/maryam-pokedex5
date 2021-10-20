import React, { useContext } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { HomePageContainer, CardsContainer, SingleCardContainer, SelectCategory } from './styles'

function HomePage() {

    const { states, setters } = useContext(GlobalContext)

    const { pokemons ,pokemonDetails, pokemonsPokedex } = states
    const { setPokemons, setPokemonDetails, setPokemonPokedex } = setters

    const history = useHistory()

    const goToDetails = () => {
        history.push("/details/:id")
    }

    return (
        <div>
            <Header />

            <HomePageContainer>

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