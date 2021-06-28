import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::after,*::before{
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.font.family.primary};
        margin-top:0;
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
