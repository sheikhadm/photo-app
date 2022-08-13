import React from 'react'
import { useState, useEffect } from 'react';

import { useParams,Link } from 'react-router-dom'

export default function PicturePage() {
  
  const { id } = useParams()
  const [can,setCan] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/${id}`)
    .then(res=> res.json())
    .then(json => setCan(json))
  
    
  }, [])
    console.log(can)
  
   const dat = can.length ===0 ? "Loading...." :  can.map((bin)=>{
           return   <div className="box  profile" key={bin.name}>
           <div className="imgh">
             <img src={bin.dp}  /></div>
           <div className="port">
             <h2>{bin.name}</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit.</p>
             <h4>{bin.location}</h4>
            <Link to={`/${id}/${bin.id}`}><button>Check Clicks</button></Link> 
             <button>Book Now</button></div>
         </div>
     })

  return (
    <div>
      <div className="container1">
       {dat}
      </div>
      </div>
  )
}
