import React from 'react'
import FeatureComp from '../../components/FeatureComp/FeatureComp'
import PostSide from '../../components/PostSideComp/PostSide'
import ProfileCard from '../../components/ProfileSide/ProfileCard/ProfileCard'
import "./Profile.css"
import ProfileLeftComp from './ProfileLeftComp/ProfileLeftComp'
const Profile = () => {
  return (
    <div className='Profile' >
        <ProfileLeftComp/>
        <div className="Profile-center">
            <ProfileCard />
            <PostSide/>
        </div>
        <FeatureComp/>

    </div>
  )
}

export default Profile