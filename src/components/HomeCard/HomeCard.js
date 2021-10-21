import { getDetailPokemon } from "../../services/requests";
import { useState, useEffect } from "react";
import ImagePokemon from './styles';

const HomeCard = (props) => {
    const [details, setDetails] = useState({})
    useEffect(() => {
        getDetailPokemon(props.pokemon.url, setDetails)
    }, [])

    const imagePokemon = details && details.sprites && details.sprites.other.dream_world.front_default

    return (
        <div>
            <ImagePokemon src={imagePokemon} alt={details.name}/>
        </div>
    )
}
export default HomeCard