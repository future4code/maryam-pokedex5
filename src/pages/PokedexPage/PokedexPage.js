import React from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header";

function PokedexPage() {

    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
    }

    const goToDetails = () => {
        history.push("/details/:id")
    }

    return (
        <div>
            <Header goToHome={goToHomePage}/>
            <h1>Pokedex Page</h1>

            <button onClick={goToDetails}>Detalhes</button>
            <button>Adicionar</button>
        </div>
    )
}

export default PokedexPage