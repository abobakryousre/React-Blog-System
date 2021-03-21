
import {Post} from "../component/post"


export function HomePage() {
  return(
      <div>
        <span> Home </span>
        <span>Posts</span>
        <span>Profile</span>
        <span></span>
        <span></span>
        <br>
      </br>
      <Post postId={1}></Post>
      </div>
  )

}
