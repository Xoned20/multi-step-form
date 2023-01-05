import styled from "styled-components";

export const Button = styled.button`
    border-radius: 50px;
    border: 1px hsl(0, 0%, 100%) solid;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    /* padding: 15px 60px; */
    background-color: transparent;
    color: hsl(0, 0%, 100%);

    &:hover {
        opacity: 0.9;
        transform: scale(0.98)
    }

`;