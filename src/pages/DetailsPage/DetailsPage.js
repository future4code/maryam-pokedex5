import React from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header";

function DetailsPage() {

    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
    }

    const goToPokedex = () => {
        history.push("/pokedex")
    }

    return (
        <div>
            <Header goToHome={goToHomePage} goToPokedex={goToPokedex}/>
            <h1>Details Page</h1>
        </div>
    )
}

export default DetailsPage