import styled from "styled-components";

export const GlobalStyles = styled.body`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: hsl(0, 0%, 100%);
        font-family: Ubuntu;
        color: hsl(0, 0%, 100%);
        width: 100%;
        display: flex;
        align-items: center;
    }

    p {
        color: hsl(229, 24%, 87%);
        font-size: 16px;
    }

    span {
        color: hsl(0, 0%, 100%);
        font-size: 18px;
        font-weight: 700;
    }
`