import { useState } from "react"
import React from 'react'
import {Switch} from 'antd'

const Toggle = () => {

    // const [show,setShow]=useState(true)


  return (
    <div>
        <Switch />
        {/* <button onClick={()=>setShow(true)}>Show</button>
        <button onClick={()=>setShow(false)}>Hide</button> */}
        {/* <button onClick={()=>setShow(!show)}>Toggle</button> */}
    </div>
  )
}

export default Toggle