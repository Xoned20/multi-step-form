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
            <label for="fname">Name</label>
            <input type="text" name="fname" id="fname" required />
          </FlexForm>
          <FlexForm>
            <label for="email">Email Address</label>
            <input type="email" name="email" id="email" required />
          </FlexForm>
          <FlexForm>
            <label id="phoneno">Phone Number</label>
            <input type="tel" name="phoneno" id="phoneno" required />
          </FlexForm>   
        </form>
        <SubmitButton type='submit'>Next</SubmitButton>  
      </StyledStep1>
  )
}

export default Step1