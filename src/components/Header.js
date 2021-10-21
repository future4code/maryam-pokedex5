import React from "react";
import { HeaderContainer } from "./styles";
import { useHistory } from "react-router";

const Header = () => {

    const history = useHistory();

    const goToPokedex = () => {
        history.push("/pokedex")
    }

    const goToHomePage = () => {
        history.push("/")
        
    }

    console.log(history.location.pathname)
    return (
        <HeaderContainer>
            <a onClick={goToHomePage}>
                <img alt="logo" />
                PokeDev
            </a>
            {history.location.pathname === "/pokedex" ? <></> :<button onClick={goToPokedex}>Ir para PokéDex</button>}
        </HeaderContainer>
    )
}

export default Header;