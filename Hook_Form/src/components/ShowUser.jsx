import React from 'react'

export default function ShowUser(props) {
    const {regUser,setRegUser}=props
        return (
        <div>
            <h2> First Name : {regUser.FirstName}</h2>
            <h2>Last Name:{regUser.LastName}</h2>
            <h2>Email:{regUser.Email}</h2>
            <h2>Password:{regUser.Password}</h2>
            <h2>Confirm Password:{regUser.c_Password}</h2>
  
        </div>
    )
  }