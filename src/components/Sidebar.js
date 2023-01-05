import React from 'react'
import { Button } from './styles/Button.styled'
import { Flex, FlexSidebar } from './styles/Flex.styled'
import { StyledSidebar } from './styles/Sidebar.styled'

const Sidebar = () => {
  return (
    <StyledSidebar>
       <FlexSidebar>
            <Flex>
                <Button>1</Button>
                <div>
                   <p>Step 1</p>
                    <h4>YOUR INFO</h4> 
                </div>
            </Flex>
            <Flex>
                <Button>2</Button>
                <div>
                    <p>Step 2</p>
                    <h4>SELECT PLAN</h4> 
                </div>  
            </Flex>
            <Flex>
                <Button>3</Button>
                <div>
                    <p>Step 3</p>
                    <h4>ADD-ONS</h4>
                </div>
            </Flex>
            <Flex>
                <Button>4</Button>
                <div>
                    <p>Step 4</p>
                    <h4>SUMMARY</h4>
                </div> 
            </Flex>
       </FlexSidebar>
    </StyledSidebar>
  )
}

export default Sidebar