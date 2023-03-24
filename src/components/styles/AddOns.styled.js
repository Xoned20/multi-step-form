import styled from "styled-components";

export const AddOns = styled.div`
    display: flex;
    align-items: center;
    width: 32em;
    text-align: left;
    border-radius: 10px;
    border: 1.5px hsl(243, 100%, 62%) solid;
    margin-bottom: 22px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 5px;
    padding-left: 25px;
    cursor: pointer;

    &:hover{
        background-color: hsl(231, 100%, 99%);
    }

    input{
        width: 20px;
        padding-left: 5px;
        padding-right: 5px;
        color: hsl(243, 100%, 62%);
    }

    p {
        padding-left: 35px;
        width: 300px;
        color: hsl(213, 96%, 18%);
        font-size: 16px;
        font-weight: bold;
    }

    span {
        color: hsl(231, 11%, 63%);
        font-size: 16px;
        font-weight: 500;
    }

    small{
       padding-left: 50px;
       color: hsl(243, 100%, 62%);
    }

    @media(max-width: ${({theme}) => theme.mobile}){
    
    }
`;