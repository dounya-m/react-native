import React from 'react'
import "./CurrentWeither.css"
import cloud from '../../assets/icones/cloud-computing.png'

function CurenWeather() {
    return (
        <div className='weather'>
            <div className='top'>
                <p className='city'>Belgrad</p>
                <p className='weather-disc'>Sunny</p>
            </div>
            <ion-icon name="heart"></ion-icon>
            <img alt='weather' className='weaher-icone' src={cloud} />
        </div>
    )
}


export default CurenWeather
