import React from 'react'
import "./ProfileCard.css"
import Cover from"../../../img/cover.jpg"
import Profile from"../../../img/profileImg.jpg"
import Profilepage from '../../../Pages/Profile/Profile'
import { useNavigate } from 'react-router-dom'

const ProfileCard = () => {
  const navigate=useNavigate()

  const handleClick =()=>{
    navigate("/profile")
  }
  return (
    <div className='ProfileCard'>
        <div className="profile-img">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>
        <div className="profileName">
            <span>Malik Arslan</span>
            <span>React Developer</span>
        </div>
        <div className="folloeSatus">
            <hr/>
          <div>
          <div className="follow">
                <span>6,548</span>
                <span>Followig</span>
            </div>
                <div className="vl"></div>
            <div className="follow">
                <span>1</span>
                <span>Followers</span>
            </div>

            {Profilepage &&(
              <>
              <div className="vl"></div>
              <div className="follow">
                <span>6</span>
                <span>Posts</span>
              </div>
              </>
            )}

          </div>
            <hr />
            </div>
            {
            <span onClick={handleClick}>My Profile</span>
          }
          </div>
        
  )
}

export default ProfileCard