import React from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header";

function HomePage() {

    const history = useHistory()

    const goToPokedex = () => {
        history.push("/pokedex")
    }

    const goToDetails = () => {
        history.push("/details/:id")
    }

    return (
        <div>
            <Header goToPokedex={goToPokedex}/>
            <h1>Home Page</h1>

            <button onClick={goToDetails}>Detalhes</button>
            <button>Adicionar</button>
            
        </div>
    )
}

export default HomePage