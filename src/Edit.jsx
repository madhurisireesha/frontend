import React from 'react'
import { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'
const Edit = () => {
  const[name,setName]=useState('')
  const[branch,setBranch]=useState('')
  const{id}=useParams();
  const navigate=useNavigate()
  const newName=(event)=>{
    setName(event.target.value)
  }
  const newBranch=(event)=>{
    setBranch(event.target.value)
  }
  const updateData=(e)=>{
    e.preventDefault();
    axios.put('http://localhost:3000/edit/'+id,{name,branch})
   .then(res=>{console.log(res)
    navigate('/')
   })
   .catch(err=>{console.log(err)})
  }
  return (
    <div>
      <form onSubmit={updateData}>
        <input type="text" tooltip="Enter the new name" onChange={newName}/>
        <br/>
        <input type="text" tooltip="Enter the new branch" onChange={newBranch}/>
        <br/>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default Edit
