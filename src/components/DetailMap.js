import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import ReactDOM from "react-dom"
import '../css/detailMap.css'
// import Map from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
// import mkstyle from '../style.json'
import features from './features.geojson'


mapboxgl.accessToken = 'pk.eyJ1Ijoic3BhcnRhbnJhaiIsImEiOiJjbGFrcHFkd28wYTdvM29ydDR2cjNvc2duIn0.furX-Iz2YZk73evtS2RZIQ';

// popup component
const Popup = ({ routeName, routeNumber, city, type }) => (
    <div className="popup">
        <h3 className="route-name">{routeName}</h3>
        <div className="route-metric-row">
            <h4 className="row-title">Route #</h4>
            <div className="row-value">{routeNumber}</div>
        </div>
        <div className="route-metric-row">
            <h4 className="row-title">Route Type</h4>
            <div className="row-value">{type}</div>
        </div>
        <p className="route-city">Serves {city}</p>
    </div>
)



function DetailMap() {
    // const [lat, setLat] = useState(37.8)
    // const [long, setLong] = useState(-122.4)

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(20.8614);
    const [lat, setLat] = useState(3.0720);
    const [zoom, setZoom] = useState(2.5);

    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }))

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/spartanraj/clam4hyns006v15qm9t69yi4q",
            center: [lng, lat],
            zoom: zoom
        });

        // map.on("load", () => {
        //     map.addSource("bus-routes", {
        //         type: "geojson",
        //         data: features,
        //     })

        //     map.addLayer({
        //         id: "bus-routes-line",
        //         type: "line",
        //         source: "bus-routes",
        //         paint: {
        //             "line-color": "#4094ae",
        //             "line-width": 4,
        //         },
        //     })
        // })

        // map.on("click", e => {
        //     const features = map.queryRenderedFeatures(e.point, {
        //         layers: ["bus-routes-line"],
        //     })
        //     if (features.length > 0) {
        //         const feature = features[0]
        //         // create popup node
        //         const popupNode = document.createElement("div")
        //         ReactDOM.render(
        //             <Popup
        //                 // routeName={feature?.features?.properties?.label}
        //                 // routeNumber={feature?.features?.properties?.population}
        //                 // city={feature?.features?.properties?.population}
        //                 // type={feature?.features?.properties?.population}
        //                 routeName="hello"
        //                 routeNumber="rajnish"
        //                 city="name"
        //                 type="puri"
        //             />,
        //             popupNode
        //         )
        //         popUpRef.current
        //             .setLngLat(e.lngLat)
        //             .setDOMContent(popupNode)
        //             .addTo(map)
        //     }
        // })

        // // cleanup function to remove map on unmount
        // return () => map.remove()


    }, []);


    // testing popup in marker


    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    const mark = () => {
        const marker = new mapboxgl.Marker()
        const minpop = new mapboxgl.Popup()
        minpop.setText("here here i am here")
        marker.setPopup(minpop)
        marker.setLngLat([26.4716, 11.8424])
        marker.addTo(map)
    }

    // map.on("load", mark)





    return (
        <div className='detMapss'>
            <div className='detailMap'>
                <div className='detailMap_head'>contact</div>
                <div className='detailMap_map' ref={mapContainer}>
                    {/* map is here */}
                    <div className="sidebar">
                        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                    </div>



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



// const [lat, setLat] = useState(8.7)
// const [long, setLong] = useState(34.5)
// const [showPopup, setShowPopup] = React.useState(true);
//     <Map
// mapboxAccessToken='pk.eyJ1Ijoic3BhcnRhbnJhaiIsImEiOiJjbGFrcHFkd28wYTdvM29ydDR2cjNvc2duIn0.furX-Iz2YZk73evtS2RZIQ'
// initialViewState={{
//     longitude: long,
//     latitude: lat,
//     zoom: 14
// }}
// style={{ width: "100%", height: "100%", zIndex: "-1000px" }}
// // mapStyle="mapbox://styles/mapbox/streets-v9"
// // mapStyle="mapbox://styles/spartanraj/clam4hyns006v15qm9t69yi4q"
// mapStyle={mkstyle}
// >
// {showPopup && (
//     <Popup longitude={long} latitude={lat}
//         anchor="bottom"
//         onClose={() => setShowPopup(false)}>
//         You are here
//     </Popup>)}
// </Map>