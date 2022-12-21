import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects/>}/>
      </Routes>
    </Router>
  )
}

export default App
