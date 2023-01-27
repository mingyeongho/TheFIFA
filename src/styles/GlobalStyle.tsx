import { createGlobalStyle } from "styled-components";
import EASANS from "../assets/EASPORTS15.ttf";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-width: 100vw;
        min-height: 100vh;
    }

    #root {
        position: relative;
        display: flex;
        flex-direction: column;
    }

    main {
        flex: 1;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .accent {

        font-family: 'EASANS'
    }

    @font-face {
        font-family: 'EASANS';
        src: url(${EASANS});
    }
`;
