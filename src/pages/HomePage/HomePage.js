import React from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import { HomePageContainer, CardsContainer, SingleCardContainer, SelectCategory } from './styles';
import {goToDetails} from '../../routes/Coordinator'

function HomePage() {

    const history = useHistory()

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