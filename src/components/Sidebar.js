import React from 'react'
import { Link } from "react-router-dom"
import { Button } from './styles/Button.styled'
import { Flex, FlexSidebar } from './styles/Flex.styled'
import { StyledSidebar } from './styles/Sidebar.styled'

const Sidebar = () => {
  return (
    <StyledSidebar>
       <FlexSidebar>
            <Flex>
                <Button><Link to="">1</Link></Button>
                <div>
                   <p>Step 1<br ></br><span>YOUR INFO</span></p>
                </div>
            </Flex>
            <Flex>
                <Button><Link to="">2</Link></Button>
                <div>
                    <p>Step 2<br /><span>SELECT PLAN</span></p>
                </div>  
            </Flex>
            <Flex>
                <Button><Link to="">3</Link></Button>
                <div>
                    <p>Step 3<br /><span>ADD-ONS</span></p> 
                </div>
            </Flex>
            <Flex>
                <Button><Link to="">4</Link></Button>
                <div>
                    <p>Step 4<br /><span>SUMMARY</span></p>
                </div> 
            </Flex>
       </FlexSidebar>
    </StyledSidebar>
  )
}

export default Sidebar