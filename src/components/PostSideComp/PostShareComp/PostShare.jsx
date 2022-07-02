import {React , useState, useRef} from 'react'
import "./PostShare.css"

import ProfileImage from "../../../img/profileImg.jpg"
import {UilScenery , UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes } from "@iconscout/react-unicons"

const PostShare = () => {
    const [image,setImage]=useState(null);
    const imageRef= useRef();
    const videoRef= useRef();

    const onImageChange=(event)=>{
        if(event.target.files && event.target.files[0])
        {
            let img=event.target.files[0]
            setImage({
                image: URL.createObjectURL(img)
            });
        }
    }
    const onVedioChange=(event)=>{
        if(event.target.files && event.target.files[0])
        {
            let videos=event.target.files[0]
            setImage({
                video: URL.createObjectURL(videos)
            });
        }
    }

  return (
    <div className='PostShare'>
        <img src={ProfileImage} alt="" />
    <div>
        <input type="text" placeholder="What's happening"  />
    <div className="postOptions">
        <div className="option" style={{color:"var(--photo)"}}
        onClick={()=>imageRef.current.click()}
        >
            <UilScenery/>
            Photo
        </div>
        <div className="option" style={{color:"var(--video)"}}
        onClick={()=>videoRef.current.click()}
        
        >
            <UilPlayCircle/>
            Video
        </div>{" "}
        <div className="option" style={{color:"var(--location)"}}>
            <UilLocationPoint/>
            Location
        </div>{" "}
        <div className="option" style={{color:"var(--schedule)"}}> 
            <UilSchedule/>
            Schedule
        </div>{" "}
        <button className="button ps-button">Share</button>
        <div style={{display:'none'}}>
            <input type="file" name='myImage' ref={imageRef} onChange={onImageChange}/>
        </div>
        <div style={{display:'none'}}>
            <input type="video" name='myImage' ref={videoRef} onChange={onVedioChange}/>
        </div>
    </div>
    
    {image && (
        <div className="previousImage">
            <UilTimes onClick={()=>setImage(null)} style={{background:"white",color:'black'}}/>
            <img src={image.image} alt="" />
        </div> 
    )}

    </div>
    </div>
  )
}

export default PostShare