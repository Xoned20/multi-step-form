import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    @media(max-width: ${({theme}) => theme.mobile}){
    
    }
`;

export const FlexSidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 2em;
    padding-top: 2em;

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: row;
        justify-content: center;
        padding: 0;
    }
`

export const FlexForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    margin-bottom: 2em;
`;

export const FlexToggle = styled.div`
    display: flex;
    align-items: center;
    background-color: hsl(217, 100%, 97%);
    border: 1px hsl(0, 0, 100%);
    border-radius: 15px;
`
