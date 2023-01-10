import React from 'react'
import Card from './Card'
import { FlexToggle } from './styles/Flex.styled'
import { StyledStep } from './styles/Step.styled'
import Toggle from './Toggle'

const Step2 = () => {
  return (
    <StyledStep>
        <h1>Select your plan</h1>
        <p>You have the option of yearly or monthly billing</p>
        <Card />
        <FlexToggle>
          <span>Monthly</span><Toggle /><span>Yearly</span>
        </FlexToggle>
    </StyledStep>
  )
}

export default Step2