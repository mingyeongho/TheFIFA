import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }

    #root {
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
