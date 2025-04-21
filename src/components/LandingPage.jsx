import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="landing">
      <button className="neon-button" onClick={() => navigate('/wish')}>
        Click Me
      </button>
    </div>
  )
}

export default LandingPage
