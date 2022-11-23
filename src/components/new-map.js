import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import '../css/detailMap.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import '../css/fullMap.css'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import MenuIcon from "@mui/icons-material/Menu";


import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";




mapboxgl.accessToken = 'pk.eyJ1Ijoic3BhcnRhbnJhaiIsImEiOiJjbGFrcHFkd28wYTdvM29ydDR2cjNvc2duIn0.furX-Iz2YZk73evtS2RZIQ';



function SimpleDialog(props) {
    const { onClose, selectedValue, open, lat, lng } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {

        onClose(value);
    };
    const [acName, setAcName] = useState("");
    const [acType, setType] = useState("");
    const [geo, setGeo] = useState("");
    const [Rain, setRain] = useState("");
    const [recharge, setRecharge] = useState("");

    return (
        <Dialog onClose={handleClose} open={open}>
            <div className="form_lat">
                {/* <div className="latN">
            <div className="latNa">Latitude</div>
            <input type="number" value={lat} />
          </div>
          <div className="latN">
            <div className="latNa">Longitude</div>
            <input type="number" value={lng} />
          </div> */}
                <div className="latName">
                    <div className="acname">AQUIFERS NAME</div>
                    <input
                        type="text"
                        value={acName}
                        onChange={(e) => setAcName(e.target.value)}
                    />
                </div>
                <div className="latName">
                    <div className="acname">AQUIFERS TYPE</div>
                    <input
                        type="text"
                        value={acType}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div className="latName">
                    <div className="acname">RAINFALL</div>
                    <input
                        type="text"
                        value={Rain}
                        onChange={(e) => setRain(e.target.value)}
                    />
                </div>
                <div className="latName">
                    <div className="acname">RECHARGE</div>
                    <input
                        type="text"
                        value={recharge}
                        onChange={(e) => setRecharge(e.target.value)}
                    />
                </div>
                <Button className="latLButton" onClick={handleListItemClick}>
                    save
                </Button>
            </div>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};





function NewMap() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(20.8614);
    const [lat, setLat] = useState(3.0720);
    const [zoom, setZoom] = useState(2.75);

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('gh');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/spartanraj/clam4hyns006v15qm9t69yi4q',
            center: [lng, lat],
            zoom: zoom
        });
    }, []);

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('click', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            // setZoom(map.current.getZoom().toFixed(2.74));
        });
    });

    const [newLat, setNewLat] = useState('')
    const [newLng, setNewLng] = useState('')

    const saveLL = () => {
        setNewLat('')
        setNewLng('')
    }



    // drawer design
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    // Map Navigation

    window.onload = function () {
        document.querySelector('#aquifer').addEventListener("click", () => {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/spartanraj/clam4hyns006v15qm9t69yi4q',
                center: [lng, lat],
                zoom: zoom
            });
        });

        document.querySelector('#rainfall').addEventListener("click", () => {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/spartanraj/clanawm5k001414mmayh06an7',
                center: [lng, lat],
                zoom: zoom
            });
        });

        document.querySelector('#recharge').addEventListener("click", () => {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/spartanraj/clanakvk8001314phd67uxfc5',
                center: [lng, lat],
                zoom: zoom
            });
        });

        document.querySelector('#well').addEventListener("click", () => {
            console.log('4')
        });
    }


    return (
        <div className="fullMap">
            {/* update for left side drawer */}
            <div>
                {["left"].map((anchor) => (
                    <React.Fragment key={anchor}>

                        <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>

            {/* Navigation buttons */}
            <div className='islands'>
                <div className='dynamicIsland'>
                    <button id='aquifer'>Aquifers</button>
                    <button id='rainfall'>Recharge</button>
                    <button id='recharge'>Rain</button>
                    <button id='well'>Well</button>
                </div>
            </div>

            <div className="full_map" ref={mapContainer} onClick={handleClickOpen}>
                <div className="sidebar">
                    Longitude: {lng} | Latitude: {lat}
                </div>
            </div>

            {/* <div className='fillLL'>
                <div className='addMan'>Enter Latitude & Longitude manually</div>
                <div className='LatTT'>
                    <input type="text" placeholder='Latitude...' value={newLat} onChange={e => setNewLat(e.target.value)} />
                </div>
                <div className='LatTT'>
                    <input type="text" placeholder='Longitude...' value={newLng} onChange={e => setNewLng(e.target.value)} />
                </div>
                <div className='latName'>
                    <div className='acname'>AQUIFERS NAME</div>
                    <input type='text' value={acName} onChange={e => setAcName(e.target.value)} />
                </div>
                <div className='latName'>
                    <div className='acname'>AQUIFERS TYPE</div>
                    <input type='text' value={acType} onChange={e => setType(e.target.value)} />
                </div>
                <div className='latGeoN'>
                    <div className='acname'>GEOMETRY</div>
                    <label><input type='radio' value='Points' name="geo" onChange={e => setGeo(e.target.value)} />Points</label>
                    <label><input type='radio' value='Polygon' name="geo" onChange={e => setGeo(e.target.value)} />Polygon</label>
                </div>
                <div className='latName'>
                    <div className='acname'>RAINFALL</div>
                    <input type='text' value={Rain} onChange={e => setRain(e.target.value)} />
                </div>
                <div className='latName'>
                    <div className='acname'>RECHARGE</div>
                    <input type='text' value={recharge} onChange={e => setRecharge(e.target.value)} />
                </div>
                <Button className="latlongSave" onClick={saveLL}>save</Button>
            </div> */}

            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
                lat={lat}
                lng={lng}
            />


        </div>
    );
}

export default NewMap