import React from 'react'
import './NavbarComponent.css'

export default function Navbar() {
  return (
    <header className="navbar_component">
        <a href="/" className="logo">Biccas</a>
        <nav>
            <ul className="nav__links">
                <li className="nav_list"><a className="navbar_links active" href="/">Home</a></li>
                <li className="nav_list"><a className="navbar_links" href="/">Product</a></li>
                <li className="nav_list"><a className="navbar_links" href="/">FAQ</a></li>
                <li className="nav_list"><a className="navbar_links" href="/">Blog</a></li>
                <li className="nav_list"><a className="navbar_links" href="/">About Us</a></li>
            </ul>
        </nav>
        <div>
            <a href="/" className="login_button">Login</a>
            <a href="/" className="cta"><button className="signup_button">Sign Up</button></a>
        </div>

    </header>
  )
}
