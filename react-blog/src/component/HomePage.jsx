
import { useEffect, useState } from "react";
import { Post } from "../component/post";


export function HomePage(userId) {
  const [posts, setpostState]= useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(json => setpostState(json))
            // console.log(posts)
       

    } ,[] );
  return(
      <div>
        <span> Home </span>
        <span>Posts</span>
        <span>Profile</span>
        <span></span>
        <span></span>
        <br>
      </br>
      <div>
        
     {posts.map((post)=>{
       return <div><Post postId={post.id}></Post></div>
      })} 
      </div>
     
      
      </div>
  )

}
