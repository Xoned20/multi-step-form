import React from 'react'
import { StyledStep } from './styles/Step.styled'

const Step3 = () => {
  return (
    <StyledStep>
        <h1>Pick add-ons</h1>
        <p>Add-ons help to enhance your gaming experience</p>
        <div>
            <input type="checkbox" /><p>Online service<span>Access to multiplayer games</span></p><em>+$1/mo</em>
        </div>
    </StyledStep>
  )
}

export default Step3