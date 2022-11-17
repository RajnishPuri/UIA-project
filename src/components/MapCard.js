import React from 'react'
import thumb from '../assets/back.jpg'
import '../css/mapCard.css'
import { Link } from 'react-router-dom'

function MapCard() {
    return (
        <div className='mapcard'>
            <img src={thumb} alt="thumb" />
            <div className='mapDes'>

                <div className='map_name'>New York</div>
                <div className='map_d'>Praesent tincidunt sed tellus ut rutrum sed vitae justo. magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <Link to='maps'><div className='map_button'>view</div></Link>
            </div>
        </div>
    )
}

export default MapCard