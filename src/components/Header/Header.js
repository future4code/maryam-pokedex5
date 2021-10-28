import React from "react";
import { HeaderContainer, LogoPokeball, LogoPokeDev, GoToPokedexContainer, IrParaPokedex } from "./styles";
import { useHistory } from "react-router";
import { goToHome, goToPokedex } from "../../routes/Coordinator";
import pokedev from '../../images/PokeDev.png'
import pokeball from '../../images/pokeball-icon.png';
import pokedex from '../../images/Ir-para-Pokedex.png'

const Header = () => {
    const history = useHistory();

    return (
        <HeaderContainer>
            <a onClick={() => goToHome(history)}>
                <LogoPokeDev src={pokedev} />
            </a>
            {history.location.pathname === "/pokedex" 
            ?
            <></> 
            : 
            <GoToPokedexContainer onClick={() => goToPokedex(history)}>
                <IrParaPokedex src={pokedex}/>
                <LogoPokeball src={pokeball} alt="logo" />
            </GoToPokedexContainer>
            }
        </HeaderContainer>
    )
}

export default Header;