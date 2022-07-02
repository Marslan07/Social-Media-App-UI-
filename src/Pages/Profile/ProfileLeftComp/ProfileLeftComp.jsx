import React from 'react'
import FollwerCard from '../../../components/ProfileSide/FollwerCard/FollwerCard'
import LogoSearch from '../../../components/ProfileSide/LogoSearch/LogoSearch'
import InfoCardComp from '../InfoCardComp/InfoCardComp'
import  "./ProfileLeftComp.css"
const ProfileLeftComp = () => {
  return (
    <div className='ProfileLeftComp'>
        <LogoSearch/>
        <InfoCardComp/>
        <FollwerCard/>
    </div>
  )
}

export default ProfileLeftComp