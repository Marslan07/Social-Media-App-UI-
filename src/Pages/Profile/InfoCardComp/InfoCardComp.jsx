import React from 'react'
import "./InfoCardComp.css"
import {UilPen} from "@iconscout/react-unicons"

const InfoCardComp = () => {
  return (
    <div className='infoCard'>
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem' height='1.3rem'/>
            </div>
        </div>
        <div className="info">
            <span><b>Status</b></span>
            <span>In Relationship</span>
        </div>
        <div className="info">
            <span><b>Lives</b></span>
            <span>Multan</span>
        </div>
        <div className="info">
            <span><b>Works at</b></span>
            <span>Self Employe</span>
        </div>
         <button className="button logout-btn">Logout</button>
    </div>
  )
}

export default InfoCardComp