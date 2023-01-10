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
                <Link to="/"><Button>1</Button></Link>
                <div>
                   <p>STEP 1<br ></br><span>YOUR INFO</span></p>
                </div>
            </Flex>
            <Flex>
                <Link to="/step2combined"><Button>2</Button></Link>
                <div>
                    <p>STEP 2<br /><span>SELECT PLAN</span></p>
                </div>  
            </Flex>
            <Flex>
                <Link to=""><Button>3</Button></Link>
                <div>
                    <p>STEP 3<br /><span>ADD-ONS</span></p> 
                </div>
            </Flex>
            <Flex>
                <Link to=""><Button>4</Button></Link>
                <div>
                    <p>STEP 4<br /><span>SUMMARY</span></p>
                </div> 
            </Flex>
       </FlexSidebar>
    </StyledSidebar>
  )
}

export default Sidebar