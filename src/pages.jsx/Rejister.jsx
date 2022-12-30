import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Rejister = () => {
   
     const navigate = useNavigate()
    const [usersData , setUsersData ] = useState({
        name : "" , 
        email : "",
        password : ""
    })
 const handleRejister = async ()=>{
    await axios.post("http://localhost:3000/myusers" , usersData)
    navigate("/")
 }
  return <>
        <div className="container">
              <div className="row">
                <div className="col-sm-6 offset-sm-3">
                  <div className="card">
                    <div className="card-header">Signup</div>
                    <div className="card-body">
                      <div>
                        <label for="name" className="form-label">First name</label>
                        <input
                        value={usersData.name}
                        onChange={e=>setUsersData({...usersData , name : e.target.value})}
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter your name"
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a username.</div>
                      </div>
                      <div className="mt-2">
                        <label for="email" className="form-label">First Email</label>
                        <input
                        value={usersData.email}
                        onChange={e=>setUsersData({...usersData , email : e.target.value})}
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
                        value={usersData.password}
                        onChange={e=>setUsersData({...usersData , password : e.target.value})}
                          type="text"
                          className="form-control"
                          id="password"
                          placeholder="Enter Your Password"
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a password.</div>
                      </div>
                      <div className="mt-2">
                        <label for="cpassword" className="form-label"
                          >Confirm Password</label
                        >
                        <input
                          type="text"
                          className="form-control"
                          id="cpassword"
                          placeholder="Confirm Your Password"
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Please Recheck Your Password.
                        </div>
                      </div>
                      <button 
                      onClick={handleRejister}
                      type="button" className="btn btn-primary w-100 mt-3">
                        Signup
                      </button>
                      <p className="text-center mt-3">
                        Already Have Account? <a href="#">Login</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  </>
}

export default Rejister