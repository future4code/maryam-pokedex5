import React from "react";
import { HeaderContainer } from "./styles"

function Header(props) {

    return (
        <HeaderContainer>
            <a onClick={props.goToHome}>
                <img />
                PokeDev
            </a>

            <button onClick={props.goToPokedex}>
                Ir para PokéDex
            </button>

        </HeaderContainer>
    )
}

export default Header