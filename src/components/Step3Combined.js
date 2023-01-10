import React from 'react'
import Sidebar from './Sidebar'
import Step3 from './Step3'
import { Container } from './styles/Container.styled'
import { GlobalStyles } from './styles/GlobalStyles'

const Step3Combined = () => {
  return (
    <GlobalStyles>
        <Container>
            <Sidebar />
            <Step3 />
        </Container>
    </GlobalStyles>
  )
}

export default Step3Combined