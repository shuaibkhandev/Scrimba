import React from 'react'
import logoImg from "/images/Troll Face.png"

const Header = () => {
  return (
    <header className='header'>
        <div className='header-logo'>
            <img src={logoImg} alt="Meme Generator Logo" className='header-logo__image' width={'40px'}  />
            <h1 className="header-logo__text">Meme Generator</h1>
        </div>
        <div className="header-subtitle">
            <h4 className='header-subtitle__text'>React  Course - Project 3</h4>
        </div>
    </header>
  )
}

export default Header