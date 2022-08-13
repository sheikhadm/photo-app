import {useState,useEffect} from 'react'

export default function Downshow(props) {
  console.log(props)
  
  
  
  return (
    <>
    
      <div className="down-show">
            
            <div className="down-show-left">
            <img src={props.image1} alt="" srcset=""/>
              <img src={props.image2} alt="" srcset=""/>
            <img src={props.image3} alt="" srcset=""/>
            <img src={props.image4} alt="" srcset=""/> 
                    
            </div>
            <div className="down-show-right">
                <h3>{props.name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto recusandae, quia culpa cupiditate consectetur saepe cumque sequi ut nemo nulla placeat vero commodi aperiam distinctio minima eligendi assumenda odio voluptate!</p>
        
            </div>
        </div></>
  
  )
}
