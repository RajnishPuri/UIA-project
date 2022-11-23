import React from 'react'
import '../css/imageCom.css'
import backImg from '../assets/video-bg.mp4'

function ImageCom() {
    return (
        <div className='img'>
            <video width="auto" height="auto" autoPlay muted loop>
                <source src={backImg} type="video/mp4" />
            </video>
            <div className='sometext'>
                <h1>Aquiment</h1>
                <p>Jal Hi Jiwan Hain</p>
            </div>
        </div>
    )
}

export default ImageCom