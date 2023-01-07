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
    font-family: Ubuntu-Regular;

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

export const SubmitButton = styled.button`
    border-radius: 10px;
    width: 8em;
    height: 3em;
    margin-top: 60px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    background-color: hsl(213, 96%, 18%);
    color: hsl(0, 0%, 100%);
    font-family: Ubuntu-Regular;
`