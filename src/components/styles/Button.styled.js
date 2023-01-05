import styled from "styled-components";

export const Button = styled.button`
    border-radius: 50px;
    border: 1px hsl(0, 0%, 100%) solid;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    margin-right: 15px;
    background-color: transparent;
    color: hsl(0, 0%, 100%);

    &:hover { 
        background-color: hsl(228, 100%, 84%);
    }

    &:active { 
        background-color: hsl(228, 100%, 84%);
    }

    &:focus { 
        background-color: hsl(228, 100%, 84%);
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        
    }

`;