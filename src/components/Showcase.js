import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom'


export default function Showcase() {
  const [graph, setgraph] = useState([])

  // const bud =
  //   graph.map((But) => {
  //     return <Topshow key={But.id} content={But} />
  //   })
useEffect(()=>{
  const clickers = async () => {
    const res = await fetch( ' http://localhost:5000/clickers')
    const data = await res.json()
  
    setgraph(data)
  }
  clickers()
},[])
  const done =
    graph.map((But) => {
      return <Link to ={ `clickers/${But.category}`} > <div className="box" key={But.id}>
        <h3 className="sl">{But.category}</h3>
        <p className="pi">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem minus animi
          temporibus amet, sed harum?
        </p>

      </div> </Link>
    })
  // <button onClick={()=>handleclick(But.id)}>{But.category}</button> 
  function handleclick(id) {
    // setgraph(prev => {
    //   return prev.map((pre) => {
    //     return pre.id === id ? { ...pre, show: true } : { ...pre, show: false }
    //   })
    // })



  }
  return (
    <div className='showcase'>
      <div className="about">
        <h2 className="cat">Our Categories</h2>
        <p className="pat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad pariatur, atque modi
          earum amet
          ipsa unde officia eaque deserunt fugit accusamus, mollitia iure autem. Odio voluptate dolore vel saepe!

        </p>
      </div>
      <div className="slides">
        {done}
      </div>








    </div>
  )
}
