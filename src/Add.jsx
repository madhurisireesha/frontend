import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Add = () => {
  const[name,setName]=useState('')
  const[branch,setBranch]=useState('')
  const[id,setId]=useState('')
  const navigate=useNavigate()
  const addName=(e)=>{
    setName(
      e.target.value
    )
  }
  const addEmail=(e)=>{
    setBranch(
      e.target.value
    )
  }
  const addId=(e)=>{
    setId(e.target.value)
  }
  const addValues=(e)=>{
e.preventDefault()
 axios.post('http://localhost:3000/add/',{name,branch,id})
    .then(res=>{
      console.log(res);
      console.log("inserted")
      navigate('/') 
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  return (
    <div>
     <form onSubmit={addValues}>
        <input type="text" placeholder='enter the id' onChange={addId}/>
        <br/>

        <input type="text" placeholder='enter the name'  onChange={addName}/>
        <br/>
        <input type="text" placeholder="enter the branch" onChange={addEmail}/>
        <br/>
        <button type="submit">Add student</button>
     </form>
    </div>
  )
}
export default Add
