import React from 'react'
import { StyledStep1 } from './styles/Step1.styled'

const Step1 = () => {
  return (
    <StyledStep1> 
        <h1>Personal Info</h1>
        <p>Please provide your name, email address and phone number.</p>
        <form>
            <label for="name">Name</label>
            <input type="text" value="" required placeholder='eg. Cyril Jephery' />
            <label for="email">Email Address</label>
            <input type="email" value="" required />
            <label>Phone Number</label>
            <input />
        </form>
    </StyledStep1>
  )
}

export default Step1