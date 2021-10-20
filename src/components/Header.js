import React from "react";
import { HeaderContainer } from "./styles";
import { useHistory } from "react-router";
import { goToHome, goToPokedex } from "../routes/Coordinator";


const Header = () => {

    const history = useHistory();

    console.log(history.location.pathname)
    return (
        <HeaderContainer>
            <a onClick={() => goToHome(history)}>
                <img alt="logo" />
                PokeDev
            </a>
            {history.location.pathname === "/pokedex" ? <></> :<button onClick={() => goToPokedex(history)}>Ir para PokéDex</button>}
        </HeaderContainer>
    )
}

export default Header;