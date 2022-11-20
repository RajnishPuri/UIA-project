import React from 'react'
import thumb from '../assets/back.jpg'
import '../css/mapCard.css'
import { Link } from 'react-router-dom'

function MapCard({ k, city, desc }) {
    // console.log(k)
    return (
        <div className='mapcard'>
            <img src={thumb} alt="thumb" />
            <div className='mapDes'>

                <div className='map_name'>{city}</div>
                <div className='map_d'>{desc}</div>
                <Link to={`/maps/${k}`}><div className='map_button'>view</div></Link>

            </div>
        </div>
    )
}

export default MapCard