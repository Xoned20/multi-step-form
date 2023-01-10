import { useState } from "react"
import React from 'react'
import {Switch} from 'antd'
import Step2 from "./Step2"

const Toggle = () => {

    // // const [show,setShow]=useState(true)
    const [show,setShow]=useState(false);

    const toggler = () => {
      show ? setShow(false): setShow(true);
    }


  return (
    <div>
        <Switch onClick={toggler} />
        {show ? <Step2 /> : null }
        {/* <button onClick={()=>setShow(true)}>Show</button>
        <button onClick={()=>setShow(false)}>Hide</button> */}
        {/* <button onClick={()=>setShow(!show)}>Toggle</button> */}
    </div>
  )
}

export default Toggle