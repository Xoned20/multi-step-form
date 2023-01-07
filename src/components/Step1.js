import React from 'react'
import { SubmitButton } from './styles/Button.styled'
import { FlexForm } from './styles/Flex.styled'
import { StyledStep1 } from './styles/Step1.styled'

const Step1 = () => {
  return (
    <StyledStep1> 
        <h1>Personal info</h1>
        <p>Please provide your name, email address and phone number.</p>
        <form>
          <FlexForm>
            <label for="name">Name</label>
            <input type="text" value="" id="name" required />
          </FlexForm>
          <FlexForm>
            <label for="email">Email Address</label>
            <input type="email" value="" id="email" required />
          </FlexForm>
          <FlexForm>
            <label id="tel">Phone Number</label>
            <input type="tel" value="" id="tel" required />
          </FlexForm>   
        </form>
        <SubmitButton>Next Step</SubmitButton>  
      </StyledStep1>
  )
}

export default Step1