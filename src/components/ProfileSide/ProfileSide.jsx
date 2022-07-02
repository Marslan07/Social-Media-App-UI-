import React from 'react'
import FollwerCard from './FollwerCard/FollwerCard'
import LogoSearch from './LogoSearch/LogoSearch'
import ProfileCard from './ProfileCard/ProfileCard'
import "./ProfileSide.css"

const ProfileSide = () => {
 
  return (
      <div className="ProfileSide">
          <LogoSearch/>
          <ProfileCard/>
          <FollwerCard/>
      </div>
  )
}

export default ProfileSide