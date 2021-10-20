import { getDetailPokemon } from "../../services/requests";
import { useState, useEffect } from "react";
import ImagePokemon from './styles'




const Card = (props) => {
    const [details, setDetails] = useState('')
    useEffect(() => {
        getDetailPokemon(props.pokemon.url, setDetails)
    }, [])

    return (
        <div>
            <ImagePokemon src={details}/>
        </div>
    )
}
export default Card