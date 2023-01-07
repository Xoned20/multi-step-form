import styled from "styled-components"

export const StyledStep1 = styled.section`
    background-color: hsl(0, 0%, 100%);
    background-size: contain;
    flex: 0.4;
    text-align: right;
    font-family: Ubuntu-Regular;


    form {
        display: flex;
        flex-direction: column;
        margin-top: 3em;
        margin-bottom: 2em;
    }

    label {
        margin-bottom: 0.5em;
        color: hsl(213, 96%, 18%);
        font-weight: 700px;
        font-size: 16px;
    }

    input {
        width: 37em;
        height: 3em;
        border: 1px hsl(229, 24%, 87%) solid;
        border-radius: 8px;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 14px;
    }

    h1 {
        font-size: 35px;
        color: hsl(213, 96%, 18%);
        text-align: left;
    }

    p {
        text-align: left;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        border: 1px hsl(206, 94%, 87%) solid;
        width: auto;

        form {
        margin-top: 50px;
    }

    label {
        margin-bottom: 0.3em;
        color: hsl(213, 96%, 18%);
        font-weight: 700px;
        font-size: 16px;
    }

    input {
        width: 10em;
        height: 2em;
        border: 1px hsl(229, 24%, 87%) solid;
        border-radius: 8px;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 14px;
    }

    h1 {
        font-size: 35px;
        color: hsl(213, 96%, 18%);
        text-align: left;
    }

    p {
        text-align: left;
    }
    }

`;