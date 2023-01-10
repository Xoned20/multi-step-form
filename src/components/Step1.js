import React from 'react'
import { RightSubmitButton } from './styles/Button.styled'
import { FlexForm } from './styles/Flex.styled'
import { StyledStep } from './styles/Step.styled'
import { Link } from 'react-router-dom'

const Step1 = () => {
  return (
    <StyledStep> 
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
        <Link to="/step2combined"><RightSubmitButton type='submit'>Next</RightSubmitButton></Link>
      </StyledStep>
  )
}

export default Step1