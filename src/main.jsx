import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import LandingPage from './components/LandingPage'
import BirthdayWish from './components/BirthdayWish'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/wish" element={<BirthdayWish />} />
    </Routes>
  </Router>
)
