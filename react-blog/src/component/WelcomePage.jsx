import {useState,useEffect} from "react"
import {HomePage} from "./HomePage";

export function WelcomePage() {

    const [users, setUsersState]= useState([{}])
    const [user,setUserState]= useState({email:"",password:""})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => setUser(json))
        console.log(userID)
        console.log(user)

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
                    />
                  </div>
        <div className="mb-3">

        <button className="btb btn-primary"> </button>

        </div>

            <HomePage> </HomePage>
     </div>
  );
}
