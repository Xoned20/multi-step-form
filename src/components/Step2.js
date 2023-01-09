import React from 'react'
import Card from './Card'
import { StyledStep } from './styles/Step.styled'

const Step2 = () => {
  return (
    <StyledStep>
        <h1>Select your plan</h1>
        <p>You have the option of yearly or monthly billing</p>
        <Card />
    </StyledStep>
  )
}

export default Step2