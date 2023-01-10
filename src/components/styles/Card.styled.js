import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3em;
    margin-bottom: 2em;

    img {
        width: 80%;
    }

    & > div {
        flex: 1;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
        align-items: center;
    }
`;

export const InlineCard = styled.button`
    display: flex;
    width: 12em;
    height: 15.8em;
    background-color: #fff;
    border-radius: 15px;
    border: 1px hsl(229, 24%, 87%) solid;
    margin: 0.6em;
    padding-left: 16px;
    padding-top: 12px;
    padding-bottom: 10px;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;

    &:hover { 
        border: 1px hsl(243, 100%, 62%) solid;
        background-color: hsl(217, 100%, 97%);
    }

    &:active { 
        background-color: hsl(217, 100%, 97%);
        border: 1px hsl(243, 100%, 62%) solid;
    }

    span {
        color: hsl(231, 11%, 63%);
        font-size: 16px;
        font-weight: 400;
    }

    p {
        font-size: 18px;
        font-weight: 700;
        text-align: left;
        color: hsl(213, 96%, 18%);
    }

    em {
        font-size: 14px;
        font-weight: 400;
        text-align: left;
        color: hsl(213, 96%, 18%);
    }

    img {
        width: 50px;
        padding-bottom: 50px;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        width: 20em;
        height: 6em;
        flex-direction: row;
        align-items: flex-start;

        img {
        padding-bottom: 0px;
        margin-right: 18px;
        }

        p {
            margin: 0;
        }
    }
`