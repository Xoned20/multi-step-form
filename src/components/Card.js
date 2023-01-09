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
          <p>Arcade<br ></br><span>$9/mo</span></p>
        </div>
      </InlineCard>
      <InlineCard>
        <div>
          <img src="./images/icon-advanced.svg" alt="" />
        </div>
        <div>
          <p>Advanced<br ></br><span>$12/mo</span></p>
        </div>
      </InlineCard>
      <InlineCard>
        <div>
          <img src="./images/icon-pro.svg" alt="" />
        </div>
        <div>
          <p>Pro<br ></br><span>$15/mo</span></p>
        </div>
      </InlineCard>
    </StyledCard>
  )
}

export default Card