import React from 'react'
import FeatureComp from '../../components/FeatureComp/FeatureComp'
import PostSide from '../../components/PostSideComp/PostSide'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import "./Home.css"
const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <PostSide/>
        <FeatureComp/>
    </div>
  )
}

export default Home