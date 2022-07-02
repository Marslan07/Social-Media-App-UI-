import React from 'react'
import "./TrendCard.css"
import { TrendData } from '../../../Data/TrendCardData'

const TrendCard = () => {
  return (
    <div className='TrendCard'>
        <h3>Trend For You</h3>

        {TrendData.map((trend)=>{
            return(
                <div className="trend">
                    <span> #{trend.name}</span>
                    <span> {trend.shares}k Shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard