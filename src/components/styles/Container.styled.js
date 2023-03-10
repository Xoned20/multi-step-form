import styled from "styled-components"

export const Container = styled.div`
    width: 1000px;
    max-width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
    }
`;