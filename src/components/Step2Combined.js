import React from 'react'
import Sidebar from './Sidebar'
import Step2 from './Step2'
import { Container } from './styles/Container.styled'
import { GlobalStyles } from './styles/GlobalStyles'

const Step2Combined = () => {
  return (
    <GlobalStyles>
        <Container>
            <Sidebar />
            <Step2 />
        </Container>
    </GlobalStyles>
  )
}

export default Step2Combined