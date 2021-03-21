import { useEffect, useState } from "react";
import { Profile } from "../component/Profile";


export function WelcomePage() {

    const [users, setAllUserState]= useState([{}])
    const [login, setLoginState]= useState(false)
    const [user,setUserState]= useState({email:"",password:""})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => setAllUserState(json))
            console.log(users)
       

    } ,[] );

  return (
    <div>
        <div className="mb-3">
            <label forName="exampleFormControlInput1" className="form-label">
                Email address
            </label>
            <input

                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Email Address"
                      value={user.email}
                      onChange={(e)=>{setUserState({email:e.target.value})}}

                    />
                  </div>
                  <div className="mb-3">
                    <label forName="exampleFormControlInput1" className="form-label">
                      Password
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Password"
                      value={user.password}
                      onChange={(e)=>{setUserState({email:user.email,password:e.target.value})}}

                    />
                  </div>
        <div className="mb-3">

        <button className="btb btn-primary" onClick={()=>{setLoginState(true)}}> </button>

        </div>
        <p>Hello</p>
            {/* <HomePage userId={1}> </HomePage> */}
            <Profile userId={1} />
     </div>
  );
}
