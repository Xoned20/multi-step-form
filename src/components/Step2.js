import React from 'react'
import Card from './Card'
import { LeftSubmitButton, RightSubmitButton } from './styles/Button.styled'
import { FlexToggle, ButtonFlex } from './styles/Flex.styled'
import { StyledStep } from './styles/Step.styled'
import Toggle from './Toggle'
import { Link } from 'react-router-dom'

const Step2 = () => {
  return (
    <StyledStep>
        <h1>Select your plan</h1>
        <p>You have the option of yearly or monthly billing</p>
        <Card />
        <FlexToggle>
          <span>Monthly</span><Toggle /><span>Yearly</span>
        </FlexToggle>
        <ButtonFlex>
          <LeftSubmitButton type='submit'><Link to="/">Go Back</Link></LeftSubmitButton>
          <RightSubmitButton type='submit'>Next</RightSubmitButton>
        </ButtonFlex>
    </StyledStep>
  )
}

export default Step2