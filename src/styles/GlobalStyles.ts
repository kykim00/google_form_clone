import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    html,
    body,
    #root {
    height: 100%;
    }
    * {
    box-sizing: border-box;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
        padding-top: 20px;
        }
    a {
    color: inherit;
    text-decoration: none;
    }
    button {
        background: inherit;
        border: none;
        box-shadow:none;
    }
    ol,ul,li {
        list-style: none;
    }
`;

export default GlobalStyles;
