import React, { useState } from 'react'
import './BirthdayWish.css'

const BirthdayWish = () => {
  const [message1, setMessage1] = useState('')

  const generateFlowers = () => {
    const petals = ['🌸', '🌺', '🌼', '🌷']
    return Array.from({ length: 30 }).map((_, i) => {
      const left = Math.random() * 100
      const delay = Math.random() * 5
      const size = Math.random() * 1.5 + 1

      return (
        <div
          key={i}
          className="flower"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            fontSize: `${size}rem`,
          }}
        >
          {petals[i % petals.length]}
        </div>
      )
    })
  }

  return (
    <div className="wish-container">
      <h1 className="wish-text">🎉 Wish You a Very Happy Birthday! 🎉</h1>

      <div className="notes">
        <div className="note">🎂 Enjoy your day to the fullest!</div>
        <div className="note">💖 You're cherished more than words can say!</div>
        <div className="note">🌟 Shine bright always!</div>
      </div>

      <div className="buttons">
        <button className="wish-btn" onClick={() => setMessage1("🌈 Wish you endless luck and happiness!")}>
          ✨ Wish You Luck
        </button>
      </div>

      {message1 && <p className="blessing">{message1}</p>}

      <div className="flowers">{generateFlowers()}</div>
      <div className="lightning"></div>
    </div>
  )
}

export default BirthdayWish
