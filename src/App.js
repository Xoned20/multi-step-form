import React from 'react'
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import { GlobalStyles } from './components/styles/GlobalStyles';

const App = () => {
  return (
    <GlobalStyles>
        <Routes>
            <Route path="/" element={<Sidebar />} />
        </Routes>
    </GlobalStyles>
  )
}

export default App