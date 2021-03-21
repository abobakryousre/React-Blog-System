
import {Post} from "../component/post"
import { useEffect, useState } from "react";


export function HomePage() {
  const [posts, setpostState]= useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(json => setpostState(json))
            // console.log(users)
       

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
     <Post postId={post.id}></Post>
           
      })} 
      </div>
     
      
      </div>
  )

}
