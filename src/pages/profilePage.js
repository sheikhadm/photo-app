import React from 'react'
import { useParams, Link } from 'react-router-dom'


export default function ProfilePage() {
    const { id,name } = useParams()
    const [cl, setCl] = React.useState([])
    React.useEffect(() => {
         fetch(`http://localhost:5000/${id}/${name}`)
            .then(res => res.json())
            .then(json => setCl(json))
         
    }, [])
         
    const pin = cl.length ===0 ? "Loading...." : cl.pictures.map((p) => {
        return <img src={p}  />
    })
    return (
        <div className="pictureContainer">
            <div className="contp">
                <div className="imageGlass">
                    <img src={cl.dp} />
                </div>
                <div className="portfolio">
                    <h2>{cl.name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit.</p>
                    <h4>{cl.location}</h4>

                    <button className="bl">Book Now</button>
                </div>
            </div>

            <div className="pImages">
            {  pin}</div>
        </div>

    )
}
