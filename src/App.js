import React from 'react'
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import { GlobalStyles } from './components/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

const theme = {
    mobile: '768px',
 }

const App = () => {
  return (
    <ThemeProvider theme = {theme}>
        <GlobalStyles>
            <Routes>
                <Route path="/" element={<Sidebar />} />
            </Routes>
        </GlobalStyles>
    </ThemeProvider>
  )
}

export default App