import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        min-height: 100%;
    }

    body{
        background: #0d2636;
        font-dizer: 14px;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button{
        colort: #222;
        font-sizer: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }

    button{
        cursor: point;
    }
`;
