import styled from "styled-components";

export const GlobalStyles = styled.body`
    @font-face {
    font-family: Ubuntu-Regular;
    src: url(./fonts/Ubuntu-Regular.ttf);
    }

    * {
        box-sizing: border-box;
        
    }

    body {
        background-color: hsl(0, 0%, 100%);
        font-family: Ubuntu-Regular;
        color: hsl(0, 0%, 100%);
        width: 100%;
        display: flex;
        /* align-items: center; */
    }

    p {
        color: hsl(231, 11%, 63%);
        font-size: 16px;
        font-family: Ubuntu-Regular;
    }

    a {
        text-decoration: none;
        color: hsl(0, 0%, 100%);
    }

    span {
        color: hsl(0, 0%, 100%);
        font-size: 18px;
        font-family: Ubuntu-Regular;
        font-weight: 700;
    }

`