import React from 'react'
import Post from './Posts/Posts'
import PostShare from './PostShareComp/PostShare'
import"./PostSide.css"
const PostSide = () => {
  return (
    <div className="PostSide">
      <PostShare/>
      <Post/>
    </div>
  )
}

export default PostSide