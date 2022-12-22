import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Navigation from './components/Navigation';

import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {

  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects/>}/>
      </Routes>
    </Router>
  )
}

export default App
