import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Inter', sans-serif;
    }
    button{
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
    }
    a{
        font-size: 1.1rem;
        
    }
    h2{
        font-size: 5.5rem;
    }
    p{
        font-size: 1.6rem;
        line-height: 150%;
    }
    h4{
        font-size: 2.5rem;
    }
`;

export default GlobalStyle;
