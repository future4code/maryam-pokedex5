import React, { useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import Router from "./routes/Router"
import GlobalStyle from "./styles/Global";

const App = () => {

  const [pokemons, setPokemons] = useState([])
  const [pokemonDetails, setPokemonDetails] = useState({})
  const [pokemonsPokedex, setPokemonPokedex] = useState([])

  const states = { pokemons, pokemonDetails, pokemonsPokedex }
  const setters = { setPokemons, setPokemonDetails, setPokemonPokedex }

  return (
    <GlobalContext.Provider value={ states, setters }>
      <GlobalStyle />
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;
