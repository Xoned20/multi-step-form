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
        margin: 0;
        padding: 0;
        /* align-items: center; */
    }

    p {
        color: hsl(231, 11%, 63%);
        font-size: 16px;
        font-family: Ubuntu-Regular;
    }

    a {
        text-decoration: none;
        /* color: white; */
    }

    span {
        font-family: Ubuntu-Regular;
    }


    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
    }
`