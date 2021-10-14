import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --max-width: 1280px;
        --white: rgb(231, 243, 237);
        --lightGrey: #eee;
        --medGrey: #353535; 
        --darkGrey: #1c1c1c;
        --lightBrown: #bb995d;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        }

    * {
        box-sizing: border-box;
        font-family: Cambria, sans-serif;
    }

    body {  
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: var(--white);

      h1 {
        font-size: 2rem;
        font-weight: 600;
        color: black;
        //text-decoration: none;
      }

      h3 {
        font-size: 1.1rem;
        font-weight: 600;
        color: black;
      }

      p {
        font-size: 1rem;
        color: black;
      }
  }
`;
