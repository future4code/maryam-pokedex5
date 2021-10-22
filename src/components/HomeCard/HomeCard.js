import { getDetailPokemon } from "../../services/requests";
import { useState, useEffect } from "react";
import ImagePokemon from './styles';

const HomeCard = (props) => {
    const [details, setDetails] = useState({})

    useEffect(() => {
        getDetailPokemon(props.pokemon.url, setDetails)
    }, [])

    const imagePokemon = details && details.sprites && details.sprites.other.dream_world.front_default

    // const types = details && details.types.map((item) => {
    //     return (
    //         <p>{item.type.name}</p>
    //     )
    // })

    return (
        <div>
            <ImagePokemon src={imagePokemon} alt={details.name} />
            {/* <p>Tipo: {types}</p> */}
        </div>
    )
}
export default HomeCard