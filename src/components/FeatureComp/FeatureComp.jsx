import React from 'react'
import "./FeatureComp.css"

import Home from "../../img/home.png"
import Noti from "../../img/noti.png"
import Comment from "../../img/comment.png"
import {UilSetting} from "@iconscout/react-unicons"
import TrendCard from './TrendCard/TrendCard'

const FeatureComp = () => {
  return (
    <div className='FeatureComp'>
        <div className="nav-icons">
            <img src={Home} alt="" />
            <UilSetting/>
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
        </div>
        <TrendCard/>
        <button className="button fs-button">Share</button>
    </div>
  )
}

export default FeatureComp