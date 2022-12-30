import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import {UserCon} from "../App"
const LoginOnly = ({compo}) => {
   const {auth} =  useContext(UserCon)
   if(auth){
      return compo 
   }else{
    return <Navigate to="/"/>
   }
}

export default LoginOnly