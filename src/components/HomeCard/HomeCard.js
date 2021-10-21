import { getDetailPokemon } from "../../services/requests";
import { useState, useEffect } from "react";
import ImagePokemon from './styles';

const HomeCard = (props) => {
    const [imageDetail, setImageDetails] = useState('')
    useEffect(() => {
        getDetailPokemon(props.pokemon.url, setImageDetails)
    }, [])

    return (
        <div>
            <ImagePokemon src={imageDetail}/>
        </div>
    )
}
export default HomeCard