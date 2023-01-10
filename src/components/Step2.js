import React from 'react'
import { useState } from "react"
import {Switch} from 'antd'
import Card from './Card'
import CardYear from './CardYear'
import { LeftSubmitButton, RightSubmitButton } from './styles/Button.styled'
import { FlexToggle, ButtonFlex } from './styles/Flex.styled'
import { StyledStep } from './styles/Step.styled'
import { Link } from 'react-router-dom'

const Step2 = () => {

  const [show,setShow]=useState(false);

  const toggler = () => {
      show ? setShow(false): setShow(true);
  }

  return (
    <StyledStep>
        <h1>Select your plan</h1>
        <p>You have the option of yearly or monthly billing</p>
        {show ? <CardYear /> : <Card /> }
        <FlexToggle>
          <span>Monthly</span><Switch onClick={toggler} /><span>Yearly</span>
        </FlexToggle>
        <ButtonFlex>
          <Link to="/"><LeftSubmitButton type='submit'>Go Back</LeftSubmitButton></Link>
          <Link to="/"><RightSubmitButton type='submit'>Next</RightSubmitButton></Link>
        </ButtonFlex>
    </StyledStep>
  )
}

export default Step2