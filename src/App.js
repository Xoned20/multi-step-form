import React from 'react'
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import Step1Combined from './components/Step1Combined';

const theme = {
    mobile: '768px',
 }

const App = () => {
  return (
    <ThemeProvider theme = {theme}>
        <Routes>
            <Route path="/" element={<Step1Combined />} />
        </Routes>
    </ThemeProvider>
  )
}

export default App