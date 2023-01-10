import React from "react"
import { InlineCard, StyledCard } from "./styles/Card.styled"

const CardYear = () => {
    return (
      <StyledCard>
        <InlineCard>
          <div>
            <img src="./images/icon-arcade.svg" alt="" />
          </div>
          <div>
            <p>Arcade<br/><span>$90/yr</span><br /><em>2 months free</em></p>
          </div>
        </InlineCard>
        <InlineCard>
          <div>
            <img src="./images/icon-advanced.svg" alt="" />
          </div>
          <div>
            <p>Advanced<br /><span>$120/yr</span><br /><em>2 months free</em></p>
          </div>
        </InlineCard>
        <InlineCard>
          <div>
            <img src="./images/icon-pro.svg" alt="" />
          </div>
          <div>
            <p>Pro<br /><span>$150/yr</span><br /><em>2 months free</em></p>
          </div>
        </InlineCard>
      </StyledCard>
    )
  }
  
  export default CardYear