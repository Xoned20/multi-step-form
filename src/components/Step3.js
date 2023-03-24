import React from 'react'
import { StyledStep } from './styles/Step.styled'
import { AddOns } from './styles/AddOns.styled'
import { AddOnsCard } from './styles/Card.styled'
import { ButtonFlex } from './styles/Flex.styled'
import { Link } from 'react-router-dom'
import { LeftSubmitButton, RightSubmitButton } from './styles/Button.styled'

const Step3 = () => {
  return (
    <StyledStep>
        <h1>Pick add-ons</h1>
        <p>Add-ons help to enhance your gaming experience</p>
        <AddOnsCard>
          <AddOns>
            <input type="checkbox" /><p>Online service<br/><span>Access to multiplayer games</span></p><small>+$1/mo</small>
          </AddOns>
          <AddOns>
              <input type="checkbox" /><p>Larger storage<br/><span>Extra 1TB of cloud save</span></p><small>+$2/mo</small>
          </AddOns>
          <AddOns>
              <input type="checkbox" /><p>Customizable profile<br/><span>Custom theme on your profile</span></p><small>+$2/mo</small>
          </AddOns>
        </AddOnsCard>
        <ButtonFlex>
          <Link to="/Step2Combined"><LeftSubmitButton type='submit'>Go Back</LeftSubmitButton></Link>
          <Link to="/"><RightSubmitButton type='submit'>Next</RightSubmitButton></Link>
        </ButtonFlex>
    </StyledStep>
  )
}

export default Step3