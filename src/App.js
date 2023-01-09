import React from 'react'
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import Toggle from './components/Toggle';
// import Step1Combined from './components/Step1Combined';
// import Step2Combined from './components/Step2Combined';

const theme = {
    mobile: '768px',
 }

const App = () => {
  return (
    <ThemeProvider theme = {theme}>
        <Routes>
          <Route path='/' element={<Toggle/>} />
            {/* <Route path="/" element={<Step1Combined />} />
            <Route path="/Step2Combined" element={<Step2Combined />} />             */}
        </Routes>
    </ThemeProvider>
  )
}

export default App