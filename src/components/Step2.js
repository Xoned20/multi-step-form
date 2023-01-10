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
          <LeftSubmitButton type='submit'><Link to="/">Go Back</Link></LeftSubmitButton>
          <RightSubmitButton type='submit'><Link to="/">Next</Link></RightSubmitButton>
        </ButtonFlex>
    </StyledStep>
  )
}

export default Step2