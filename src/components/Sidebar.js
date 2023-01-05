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
                   <p>Step 1<br ></br><span>YOUR INFO</span></p>
                    
                </div>
            </Flex>
            <Flex>
                <Button>2</Button>
                <div>
                    <p>Step 2<br /><span>SELECT PLAN</span></p>
                    
                </div>  
            </Flex>
            <Flex>
                <Button>3</Button>
                <div>
                    <p>Step 3<br /><span>ADD-ONS</span></p> 
                </div>
            </Flex>
            <Flex>
                <Button>4</Button>
                <div>
                    <p>Step 4<br /><span>SUMMARY</span></p>
                </div> 
            </Flex>
       </FlexSidebar>
    </StyledSidebar>
  )
}

export default Sidebar