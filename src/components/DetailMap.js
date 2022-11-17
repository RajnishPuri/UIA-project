import React, { useState } from 'react'
import '../css/detailMap.css'
import Map from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';


function DetailMap() {
    const [lat, setLat] = useState(37.8)
    const [long, setLong] = useState(-122.4)

    return (
        <div className='detMapss'>
            <div className='detailMap'>
                <div className='detailMap_head'>contact</div>
                <div className='detailMap_map'>
                    {/* map is here */}

                    <Map
                        mapboxAccessToken='pk.eyJ1Ijoic3BhcnRhbnJhaiIsImEiOiJjbGFrcHFkd28wYTdvM29ydDR2cjNvc2duIn0.furX-Iz2YZk73evtS2RZIQ'
                        initialViewState={{
                            longitude: long,
                            latitude: lat,
                            zoom: 14
                        }}
                        style={{ width: "100%", height: "100%", zIndex: "-1000px" }}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                    />

                </div>

                <div className='detailMap_det'>
                    We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </div>

                {/* adding chart here */}

            </div>
        </div>
    )
}

export default DetailMap