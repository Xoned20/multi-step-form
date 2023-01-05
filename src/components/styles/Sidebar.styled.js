import styled from "styled-components"

export const StyledSidebar = styled.section`
    background-image: url(./images/bg-sidebar-desktop.svg);
    background-repeat: no-repeat;
    flex: 0.2;

    @media(max-width: ${({theme}) => theme.mobile}){
        background-image: url(./images/bg-sidebar-mobile.svg);
        width: 100%;
        height: 300px;

        p {
            display: none;
        }

        span {
            display: none;
        }
    }
`