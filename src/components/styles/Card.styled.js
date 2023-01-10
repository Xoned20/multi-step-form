import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;

    img {
        width: 80%;
    }

    & > div {
        flex: 1;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
    }
`;

export const InlineCard = styled.div`
    display: flex;
    width: 10em;
    background-color: #fff;
    border-radius: 15px;
    border: 1px hsl(229, 24%, 87%) solid;
    margin: 0.6em;
    padding-left: 16px;
    padding-top: 12px;
    flex-direction: column;
    align-items: flex-start;

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

    img {
        width: 50px;
        padding-bottom: 40px;
    }
`