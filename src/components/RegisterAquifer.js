import { Button } from '@mui/material'
import { feature } from '@turf/turf'
import React, { useState } from 'react'
import axios from "axios";
import '../css/registerAquifer.css'

function RegisterAquifer() {
    const [featureType, setFeature] = useState('')
    const [label, setLabel] = useState('')
    const [aquiferName, setAquiferName] = useState('')
    const [sharingCountries, setSharingCountries] = useState('')
    const [population, setPopulation] = useState('')
    const [aquiferType, setAquiferType] = useState('')
    const [rainfall, setRainfall] = useState('')
    const [annualRecharge, setAnnualRecharge] = useState('')
    const [coordinates, setCoordinates] = useState('')
    const [geometryType, setGeometryType] = useState('')
    const [aquiferID, setAquiferID] = useState('')
    const [err, setErr] = useState('')

    const registerAquifer = () => {

            window.location.href = 'https://team-artesian.000webhostapp.com/insert.php/uia-backend/insert.php/?insert-aquifer=1&password=artesian22&feature_type='
                + featureType
                + '&label=' + label
                + '&aquifer_name=' + aquiferName
                + '&sharing_countries=' + sharingCountries
                + '&population=' + population
                + '&aquifer_type=' + aquiferType
                + '&rainfall=' + rainfall
                + '&annual_recharge=' + annualRecharge
                + '&coordinates=' + coordinates
                + '&geometry_type=' + geometryType
                + '&aquifer_id=' + aquiferID;
    }

    return (
        <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post" required>
        <div className='login'>
            <div className='loginCon'>
                <div className='loginU'>
                    <div className='loginUN'>Feature type</div>
                    <input type='text' value={featureType} onChange={e => setFeature(e.target.value)} className='loginUI' required />
                </div>

                <div className='loginU'>
                    <div className='loginUN'>Label</div>
                    <input type='text' value={label} onChange={e => setLabel(e.target.value)} className='loginUI' required />
                </div>

                <div className='loginU'>
                    <div className='loginUN'>Aquifer Name</div>
                    <input type='text' value={aquiferName} onChange={e => setAquiferName(e.target.value)} className='loginUI' required />
                </div>

                <div className='loginU'>
                    <div className='loginUN'>Sharing Countries</div>
                    <input type='text' value={sharingCountries} onChange={e => setSharingCountries(e.target.value)} className='loginUI' required />
                </div>

                <div className='loginU'>
                    <div className='loginUN'>Population</div>
                    <input type='text' value={population} onChange={e => setPopulation(e.target.value)} className='loginUI' required />
                </div>

                <div className='loginU'>
                    <div className='loginUN'>Aquifer Type</div>
                    <input type='text' value={aquiferType} onChange={e => setAquiferType(e.target.value)} className='loginUI' required />
                </div>

                <div className='loginU'>
                    <div className='loginUN'>Rainfall</div>
                    <input type='text' value={rainfall} onChange={e => setRainfall(e.target.value)} className='loginUI' required />
                </div>

                <div className='loginU'>
                    <div className='loginUN'>Annual Recharge</div>
                    <input type='text' value={annualRecharge} onChange={e => setAnnualRecharge(e.target.value)} className='loginUI' required />
                </div>

                <div className='loginU'>
                    <div className='loginUN'>Coordinates</div>
                    <input type='text' value={coordinates} onChange={e => setCoordinates(e.target.value)} className='loginUI' required />
                </div>

                <div className='loginU'>
                    <div className='loginUN'>Geometry Type</div>
                    <input type='text' value={geometryType} onChange={e => setGeometryType(e.target.value)} className='loginUI' required />
                </div>

                <div className='loginU'>
                    <div className='loginUN'>ID</div>
                    <input type='text' value={aquiferID} onChange={e => setAquiferID(e.target.value)} className='loginUI' required />
                </div>

                {err && <div className='errMsg'>{err}</div>}
                <Button className="buttonL" onClick={registerAquifer}>Login</Button>
            </div>
        </div>
        </form >
    )
}

export default RegisterAquifer