import React from 'react'
import MapCard from './MapCard'
import '../css/mapSec.css'

function MapSec() {
    return (
        <div className='mapsce'>
            <div className='map_h'>Maps</div>
            <div className='maps_scroll'>
                <MapCard />
                <MapCard />
                <MapCard />
                <MapCard />
                <MapCard />
            </div>
        </div>
    )
}

export default MapSec