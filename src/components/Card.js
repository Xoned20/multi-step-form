import React from 'react'
import { StyledCard } from './styles/Card.styled'

const Card = () => {
  return (
    <StyledCard>
        <div>
          <img src="./images/icon-arcade.svg" alt="" />
        </div>
        <div>
          <h3>Arcade</h3>
          <span>$9/mo</span>
        </div>
    </StyledCard>
  )
}

export default Card