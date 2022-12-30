import React, { useContext } from 'react'
import {Link } from "react-router-dom"
import {UserCon} from "../App"
const Navbar = () => {
   const {auth ,setAuth} = useContext(UserCon)
  return <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
         {
            auth 
            ? <>
                                                                                       
            <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
             {auth && auth.name}
            </button>
            <ul class="dropdown-menu">
              <li><button class="dropdown-item" onClick={e=>setAuth(null)}>Logout</button></li>
              
            </ul>
          </div>

            </>
            :<>
           
             <Link className="nav-link active" to="/">Login</Link>
          <Link className="nav-link" to="/rejister">Rejister</Link>
            </>
         }
         
          
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar