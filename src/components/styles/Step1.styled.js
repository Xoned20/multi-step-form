import styled from "styled-components"

export const StyledStep1 = styled.section`
    background-color: hsl(0, 0%, 100%);
    flex: 0.4;
    text-align: right;
    font-family: Ubuntu-Regular;


    form {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }

    label {
        margin-bottom: 0.3em;
        color: hsl(213, 96%, 18%);
        font-weight: 700px;
        font-size: 16px;
    }

    input {
        width: 40em;
        height: 3em;
        border: 1px hsl(229, 24%, 87%) solid;
        border-radius: 8px;
    }

    h1 {
        font-size: 35px;
        color: hsl(213, 96%, 18%);
        text-align: left;
    }

    p {
        text-align: left;
    }

`;