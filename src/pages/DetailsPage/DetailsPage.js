import React from "react";
import { CardPhoto, CardPoderes, ContainerCarcter, ContainerDetail, ContainerTipo, TitleStatus } from "./styles";
import Header from "../../components/Header";

function DetailsPage() {
    return (
        <div>
            <Header />
            <ContainerDetail>
                <h1>Bulbasaur</h1>
                <CardPhoto>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif" alt="Imagem pokemon de frente"/>
                </CardPhoto>
                <CardPhoto>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif" alt="Imagem pokemon de costas" />
                </CardPhoto>
                    <TitleStatus>
                        <h2>Status</h2>
                    </TitleStatus>
                <CardPoderes>
                    <div>
                        <h4>HP: </h4>
                        <span>123</span>
                    </div>
                    <div>
                        <h4>Attack: </h4>
                        <span>Poderoso</span>
                    </div>
                    <div>
                        <h4>Defense: </h4>
                        <span>Boca de confusão</span>
                    </div>
                    <div>
                        <h4>Special Moves: </h4>
                        <span>Militancia e muito lacre</span>
                    </div>
                </CardPoderes>
                <ContainerTipo>
                    <h2>Tipo</h2>
                </ContainerTipo>
                <ContainerCarcter>
                    <h2>Principais Características</h2>
                    {/* <div> */}
                        <h4>Peso: </h4>
                        <span>69</span>
                    {/* </div> */}
                    <h4>Altura: </h4>
                    <span>1,69</span>
                </ContainerCarcter>
            </ContainerDetail>
        </div>
    )
}

export default DetailsPage