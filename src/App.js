import React, { useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import Router from "./routes/Router"
import GlobalStyle from "./styles/Global";
import { getPokemons } from "./services/requests";

const App = () => {

  const [pokemons, setPokemons] = useState([])
  const [pokemonDetails, setPokemonDetails] = useState({})
  const [pokemonsPokedex, setPokemonPokedex] = useState([])

  const states = { pokemons, pokemonDetails, pokemonsPokedex }
  const setters = { setPokemons, setPokemonDetails, setPokemonPokedex }


  useEffect(() => {
    getPokemons(setPokemons)
  }, [])


  useEffect(() => {
    const newList = [];
    pokemonNames.forEach((item) => {
      axios
        .get(`${BASE_URL}/pokemon/${item.name}`)
        .then((response) => {
          newList.push(response.data);
          if (newList.length === 20) {
            const orderedList = newList.sort((a, b) => {
              return a.id - b.id;
            });
            setPokemons(orderedList);
          }
        })
        .catch((error) => console.log(error.message));
    });
  }, [pokemonNames]);

  return (
    <GlobalContext.Provider value={{ states, setters }}>
      <GlobalStyle />
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;
