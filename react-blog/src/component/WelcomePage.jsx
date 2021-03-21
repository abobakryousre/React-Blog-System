import { useEffect, useState } from "react";
import { HomePage } from "./HomePage";

export function WelcomePage() {

    const [users, setAllUserState]= useState([{}])
    const [user,setUserState]= useState({email:"",password:""})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => setAllUserState(json))
            console.log(users)
       

    } ,[] );

    const login = ()=> {

    }
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

        <button className="btb btn-primary" onClick={()=>{console.log(user)}}> </button>

        </div>

            <HomePage> </HomePage>
     </div>
  );
}
