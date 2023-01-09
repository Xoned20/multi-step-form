import React from 'react'
import { StyledCard, InlineCard } from './styles/Card.styled'

const Card = () => {
  return (
    <StyledCard>
      <InlineCard>
        <div>
          <img src="./images/icon-arcade.svg" alt="" />
        </div>
        <div>
          <h3>Arcade</h3>
          <span>$9/mo</span>
        </div>
      </InlineCard>
      <InlineCard>
        <div>
          <img src="./images/icon-advanced.svg" alt="" />
        </div>
        <div>
          <h3>Advanced</h3>
          <span>$12/mo</span>
        </div>
      </InlineCard>
      <InlineCard>
        <div>
          <img src="./images/icon-pro.svg" alt="" />
        </div>
        <div>
          <h3>Pro</h3>
          <span>$15/mo</span>
        </div>
      </InlineCard>
    </StyledCard>
  )
}

export default Card