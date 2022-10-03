import React from 'react'
import './header.css'
import logo from '../../../assets/trulrn_192_logo.png'

export default function Header() {
  return (
    <header>
        <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1>TruLrn</h1>
        <div className="header-content">
        <div className="header-title">
              <h2>Truly Learn Everything</h2>
            </div>
            <div className="header-description">
              <p>A knowledge portal for experiencing, learning and gaining skills.</p>
            </div>  </div>      
        </div>
        <div className="header-center">
            
        </div>
        <div className="header-right">

        </div>
    </header>
  )
}
