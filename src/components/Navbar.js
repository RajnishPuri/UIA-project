import React, { useState, useEffect } from 'react'
import '../css/navbar.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



function Navbar() {
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    return (
        <div className={`nav ${show && 'hidden'}`}>

            <div className='navLeft'>
                <Link to='/'><div className='navText'>HOME</div></Link>
                <Link to='/'><div className='navText'>MAP<ArrowDropDownIcon /></div></Link>
                <Link to='/'><div className='navText'>FORM</div></Link>
                <Link to='/'> <div className='navText'>CONTACT</div></Link>

            </div>
            <div className='navRight'>
                <SearchIcon />
            </div>
        </div>


    )
}

export default Navbar


