import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    @media(max-width: ${({theme}) => theme.mobile}){
        align-items: center;

    }
`;

export const FlexSidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 80px 246px 25px;
    width: 276px;

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: row;
        justify-content: center;
        padding: 70px 0px;
        margin: auto;
    }
`
