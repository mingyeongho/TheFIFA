import { createGlobalStyle } from "styled-components";

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
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    
`;
