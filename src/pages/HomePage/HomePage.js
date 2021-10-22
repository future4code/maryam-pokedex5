import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import { HomePageContainer, CardsContainer, SingleCardContainer, SelectCategory, PokeballImage, PokedexImage, DetalhesImage, ImagePokemon } from './styles';
import { goToDetails } from '../../routes/Coordinator';
import { getPokemons, getDetailPokemon, getPokemonsTypes } from '../../services/requests';
import { GlobalContext } from "../../contexts/GlobalContext";
import pokedex from '../../images/Adicionar-a-Pokedex.png';
import detalhes from '../../images/Detalhes.png'


function HomePage() {
    const { states, setters } = useContext(GlobalContext)
    const { pokemonsPokedex, pokemonsHome } = states
    const { setPokemonPokedex, setPokemonsHome } = setters
    const history = useHistory()
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        getPokemonsTypes(setCategories)
    }, [])


    const addToPokedex = (poke) => {
        const newPokemonsPokedex = [...pokemonsPokedex];
        const newPokemons = [...pokemonsHome]
        const index = pokemonsHome.indexOf(poke)
        const position = pokemonsPokedex.findIndex((item) => {
            return item.name === poke.name;
        })
        if (position === -1) {
            newPokemonsPokedex.push(poke)
            setPokemonPokedex(newPokemonsPokedex)
        }
        if (index > -1) {
            newPokemons.splice(index, 1)
            setPokemonsHome([...newPokemons])
        }
    }

    const renderPokemons = pokemonsHome
        .map((pokemon) => {
            return (
                <SingleCardContainer key={pokemon.name}>
                    <p>{pokemon.name}</p>
                    <ImagePokemon src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
                    <div>
                        <PokedexImage onClick={() => addToPokedex(pokemon)}>
                            <img src={pokedex} />
                        </PokedexImage>
                        <DetalhesImage onClick={() => goToDetails(history, pokemon.name)}><img src={detalhes} /></DetalhesImage>
                    </div>
                </SingleCardContainer>
            )
        })


    const renderCategories = categories.map((categorie) => {
        return (
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