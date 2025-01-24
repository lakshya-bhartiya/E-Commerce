import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = ({children}) => {

useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
        useNavigate("/login")
    }
}, [])
  return (
    <div>
      
    </div>
  )
}

export default Auth
