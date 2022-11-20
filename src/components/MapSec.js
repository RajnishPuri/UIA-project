import React from 'react'
import MapCard from './MapCard'
import '../css/mapSec.css'

function MapSec() {
    const descc = 'Praesent tincidunt sed tellus ut rutrum sed vitae justo. magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    return (
        <div className='mapsce'>
            <div className='map_h'>Maps</div>
            <div className='maps_scroll'>
                <MapCard k='1' city='New York' desc={descc} />
                <MapCard k='2' city='New York' desc={descc} />
                <MapCard k='3' city='New York' desc={descc} />
                <MapCard k='4' city='New York' desc={descc} />

            </div>
        </div>
    )
}

export default MapSec