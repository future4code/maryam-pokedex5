import axios from "axios";
import { url } from "../constants/url";

export const getPokemons = (saveData) => {
    axios.get(url).then((res) => {
        console.log(res)
        saveData(res.data.results)
    }).catch((err) => {
        console.log(err)
    })
}

export const getDetailPokemon = (idUrl, set) => {
    axios.get(idUrl).then((res) => {
        console.log(res)
        set(res.data.sprites.other.dream_world.front_default)
    }).catch((err) => {
        console.log(err)
    })
}