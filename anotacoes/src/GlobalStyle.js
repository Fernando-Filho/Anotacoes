import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
    }

    :root{
        font-size: 6.25%;

        --Branco: #FEFEFE;
        --Branco_Gelo: #dddada;
        --Preto_1: #212235;
        --Preto_2: #333438;
        --Cinza: #b3b3b3;
        --Verde:#32cd32;
        --Vermelho: #e60026
    }
    body{
        height: 100vh;
        width: 100vw;
        background-color: var(--Branco_Gelo);
    }

    input, textarea{
        background-color: var(--Preto_1);
        color: var(--Cinza);
    }
    input, textarea:focus{
        outline: none;
    }
    button{
        cursor: pointer;
    }
`