import styled from "styled-components"

export const StyledSidebar = styled.div`
    background-image: url(./images/bg-sidebar-desktop.svg);
    background-repeat: no-repeat;
    width: max-content;
    flex: 0.2;

    @media(max-width: ${({theme}) => theme.mobile}){
        background-image: url(./images/bg-sidebar-mobile.svg);
    }
`