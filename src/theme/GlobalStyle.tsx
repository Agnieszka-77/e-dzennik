import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::after,*::before{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body{
        height: 100vh;
        margin: 0;
        
    }
    #root{
        height: 100%;
    }
`;

export default GlobalStyle;
