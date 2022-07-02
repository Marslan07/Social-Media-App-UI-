import React from 'react'
import "./Posts.css"
import { PostsData } from '../../../Data/PostData'
import Post from '../Post/Post'
const Posts = () => {
  return (
    <div className="post-Container">
      <div className="posts">
      {PostsData.map((post,id)=>{
        return(
          <Post data={post} id={id}/>
        )
      })}
    </div>
    </div>
  )
}

export default Posts