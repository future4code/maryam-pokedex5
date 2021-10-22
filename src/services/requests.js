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
        set(res.data)
        console.log(res.data)
    }).catch((err) => {
        console.log(err)
    })
}

export const getPokemonsTypes = (set) => {
    axios.get(`https://pokeapi.co/api/v2/type`).then((res) => {
        set(res.data.results)
    }).catch((err) => {
        console.log(err)
    })
}