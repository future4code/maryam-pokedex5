import { useContext } from "react";
import { getDetailPokemon } from "../../services/requests";
import { useState, useEffect } from "react";
import pokeballWhiteIcon from "../../images/pokeballWhite-icon.png"
import { DetailContainerList } from "./styles"
import { PokedexContext } from "../../contexts/PokedexContext";

const PokeDexList = (props) => {

    const {image , setImage} = useContext(PokedexContext)
    const [detail, setDetail] = useState({})
    
    useEffect(() => {
        getDetailPokemon(props.pokemon.url, setDetail)
    }, [])

    const onClickImage = (url) => {
        setImage(url)
    }

    const iconPokemon = detail && detail.sprites && detail.sprites.versions["generation-viii"].icons.front_default
    return (
        <DetailContainerList onClick={() => onClickImage(detail.sprites.other.dream_world.front_default)}>
            <img src={iconPokemon}/>
            <p>{detail.name}</p>
            <img src={pokeballWhiteIcon}/>
        </DetailContainerList>
    )
}
export default PokeDexList