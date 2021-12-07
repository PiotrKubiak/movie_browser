import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-color: ${({ theme }) => theme.color.gallery};
        font-family: 'Poppins', sans-serif;
    }
    `;
