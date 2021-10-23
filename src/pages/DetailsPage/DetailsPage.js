import React, { useContext, useEffect } from "react";
import { CardPhoto, CardPoderes, ContainerCarcter, ContainerDetail, ContainerTipo, TitleStatus } from "./styles";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getDetailPokemon } from "../../services/requests"
import { useParams } from "react-router";
import { url } from "../../constants/url";

const DetailsPage = () => {
    const { states, setters } = useContext(GlobalContext)
    const { pokemonDetails } = states
    const { setPokemonDetails } = setters
    const pathParams = useParams()

    useEffect(() => {
        getDetailPokemon((url + pathParams.id), setPokemonDetails)
    }, [])

    const photoPokeFront = pokemonDetails && pokemonDetails.sprites && pokemonDetails.sprites.versions["generation-v"]["black-white"].animated.front_default
    const photoPokeback = pokemonDetails && pokemonDetails.sprites && pokemonDetails.sprites.versions["generation-v"]["black-white"].animated.back_default
    const hp = pokemonDetails && pokemonDetails.stats && pokemonDetails.stats['0'].base_stat
    const attack = pokemonDetails && pokemonDetails.stats && pokemonDetails.stats['1'].base_stat
    const defense = pokemonDetails && pokemonDetails.stats && pokemonDetails.stats['2'].base_stat
    const speed = pokemonDetails && pokemonDetails.stats && pokemonDetails.stats['5'].base_stat
    const typePoke = pokemonDetails && pokemonDetails.types && pokemonDetails.types.map((tipo) => {
        return(
            <span>{tipo.type.name} </span>
            )
        })

    return (
        <div>
            <Header />
            <ContainerDetail>
                <h1>{pokemonDetails.name}</h1>
                <CardPhoto>
                    <img src={photoPokeFront} alt="Imagem pokemon de frente"/>
                </CardPhoto>
                <CardPhoto>
                    <img src={photoPokeback} alt="Imagem pokemon de costas" />
                </CardPhoto>
                    <TitleStatus>
                        <h2>Status</h2>
                    </TitleStatus>
                <CardPoderes>
                    <div>
                        <h4>HP: </h4>
                        <span>{hp}</span>
                    </div>
                    <div>
                        <h4>Attack: </h4>
                        <span>{attack}</span>
                    </div>
                    <div>
                        <h4>Defense: </h4>
                        <span>{defense}</span>
                    </div>
                    <div>
                        <h4>Speed: </h4>
                        <span>{speed}</span>
                    </div>
                </CardPoderes>
                <ContainerTipo>
                    <h2>{typePoke}</h2>
                </ContainerTipo>
                <ContainerCarcter>
                    <h2>Principais Características</h2>
                    <hr/>
                    <div>
                        <h4>Peso: </h4>
                        <span>{((pokemonDetails.weight) / 10).toFixed(1)} Kg</span>
                    </div>
                    <div>
                        <h4>Altura: </h4>
                        <span>{((pokemonDetails.height) / 10).toFixed(1)} m</span>
                    </div>
                </ContainerCarcter>
            </ContainerDetail>
        </div>
    )
}

export default DetailsPage