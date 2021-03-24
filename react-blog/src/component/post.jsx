
import { useEffect, useState } from "react";
import {Link} from "@reach/router";

export function Post(postId){
  
    const [post, setpostState]= useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId.postId}`)
            .then(response => response.json())
            .then(json => setpostState(json))
            console.log(post)
       

    } ,[] );

    return(
        <div className="card">
            <div className="card-header">
                Post
            </div>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <Link to={"/index/post/"+post.id}>
                    <button className="btn btn-primary">   view post </button>
                </Link> {" "}

            </div>
        </div>
    )

}