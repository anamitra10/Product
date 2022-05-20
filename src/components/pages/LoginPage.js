import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";
import '../../Style/login.css'

import '../../App.css'

export default function SignInPage() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    // const loginApiCall=()=>{
        async function loginApiCall(){
            let obj={email,password};
        console.warn(obj);
        await axios
      .post("https://6287454be9494df61b354390.mockapi.io/login", obj)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
        

    }
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <div className='login' action="/home">
                <p>
                    <label>Email address</label><br/>
                    <input type="text" name="email" required onChange={(e)=>setEmail(e.target.value)}/>
                </p>
                <p>
                    <label>Password</label>
                    {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
                    <br/>
                    <input type="password" name="password" required onChange={(e)=>setPassword(e.target.value)}/>
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={loginApiCall}>Login</button>

                </p>
            </div>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
