import React from 'react'
import {useSelector} from "react-redux"
function Profiles() {
    const user = useSelector(state=>state.user.value)
  return (
    <div>
        <h1>name:{user.name}</h1>
        <p>Name：{user.age}</p>
        <p>Email：{user.email}</p>
        
    </div>
    
  )
}

export default Profiles