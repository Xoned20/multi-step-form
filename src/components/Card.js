import React from 'react'
import { StyledCard } from './styles/Card.styled'

const Card = ({item: { id, title, body, image } }) => {
  return (
    <StyledCard>
        <div>
          <img src={`./images/${image}`} alt="" />
        </div>

        <div>
        </div>
    </StyledCard>
  )
}

export default Card