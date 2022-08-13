import React from 'react'
import Showcase from '../components/Showcase';
import ReactDom from 'react-dom';



export default function HomePage() {
  return (
    <div>
         <div className="container">
        <div className="front">
            <h2 className="top">We Clicked Instantly</h2>
            <p className="top-m">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsa commodi tempora
                aspernatur
                repellendus nihil tempore eius, vel exercitationem eaque dolor eos sequi modi, at libero, fugit ex
                deserunt veritatis.

            </p>
        </div>
    </div>
    <Showcase/>

    <div className="book">
        <h2 className="bo">Ready To Book Now</h2>
        
        <button className="b">Book Now</button>
    </div>
    </div>
    
  )
}
