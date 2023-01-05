import React from 'react'
import Sidebar from './Sidebar'
import Step1 from './Step1'
import { Container } from './styles/Container.styled'
import { GlobalStyles } from './styles/GlobalStyles'

const Step1Combined = () => {
  return (
        <GlobalStyles>
            <Container>
                    <Sidebar />
                    <Step1 />
            </Container>
        </GlobalStyles>
  )
}

export default Step1Combined