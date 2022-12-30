import React, { useContext, useState } from 'react'
import axios from 'axios'
import {UserCon }from "../App"
import { useNavigate } from 'react-router-dom'
const Login = () => {
   const {setAuth }  = useContext(UserCon)
    const navigate = useNavigate()
    const [loginData , setLoginData ] = useState({
        email: "",
        password : ""
    })
  const handlLogin = async ()=>{
   const {data } = await axios.get("http://localhost:3000/myusers")
     const  user  = data.find(item => item.email === loginData.email && item.password === loginData.password)
     
    if(user){
        setAuth(user)
       navigate("/admin/dashboard")
       
    }
  }
  return <>
      <div className="container">
            <div className="row">
              <div className="col-sm-6 offset-sm-3">
                <div className="card">
                  <div className="card-header">Login</div>
                  <div className="card-body">
                    <div>
                      <label for="email" className="form-label">First Email</label>
                      <input
                      value={loginData.email}
                      onChange={e=>setLoginData({...loginData , email : e.target.value})}
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter Your Email"
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                    <div className="mt-2">
                      <label for="password" className="form-label">Password</label>
                      <input
                       value={loginData.password}
                       onChange={e=>setLoginData({...loginData , password : e.target.value})}
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Your Password"
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                    <button  
                    onClick={handlLogin}
                    type="button" className="btn btn-primary w-100 mt-3">
                      Login
                    </button>
                    <p className="text-center mt-3">
                      Dont Have Account? <a href="#">Create Account</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </>
}

export default Login