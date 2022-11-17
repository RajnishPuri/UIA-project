import React from 'react'
import '../css/imageCom.css'
import backImg from '../assets/back.jpg'

function ImageCom() {
    return (
        <div className='img'>
            <img src={backImg} alt="back" />
            <div className='sometext'>new york</div>
        </div>
    )
}

export default ImageCom