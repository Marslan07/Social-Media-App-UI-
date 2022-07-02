import React from 'react'
import { Followers } from "../../../Data/FollowerData"
import "./FollwerCard.css"
const FollwerCard = () => {

   
  return (
    <div className='FollwerCard'>
        <p>who is following you</p>

        {Followers.map((followers, id)=>{
            return(
                <div className="follwers">
                    <div>
                        <img src={followers.img} alt="" className='followerImage' />
                        <div className="name">
                            <span>{followers.name}</span>
                            <span>@{followers.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>Follow</button>
                </div>

            )
        })}

    </div>
  )
}

export default FollwerCard