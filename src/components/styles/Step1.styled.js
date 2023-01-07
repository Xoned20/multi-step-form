import styled from "styled-components"

export const StyledStep1 = styled.section`
    background-color: hsl(0, 0%, 100%);
    flex: 0.4;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }

    label {
        margin-bottom: 0.3em;
        color: hsl(213, 96%, 18%);
        font-weight: 700px;
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
    }

`;