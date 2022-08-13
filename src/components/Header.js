import logo from './logo192.png'
import React from 'react'
export default function Header() {
  return (
    <>
    <header>
        <nav>
            <img src={`${logo}`} className="nav-logo"/>
            <h1 className="webname">PhotoRE</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                 <button className="book-btn">Book Now</button>
            </ul>
        </nav>
    </header>
    </>
  )
}
