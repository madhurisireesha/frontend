import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const[data,setData]=useState([])
  const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3000/')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
    
  const  handleDelete=(id)=>{
      
        axios.delete('http://localhost:3000/student/'+id)
        .then(res=>{window.location.reload()})
        .catch(err=>console.log(err))
      }
    
  return (
    <div>
      <table>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Branch</td>
        </tr>
      {data.map((stu,key)=>{
          return <tr  key={key}>
          <td>{stu.id}</td>
          <td>{stu.name}</td>
          <td>{stu.branch}</td>
          <td>
          <Link to={`/edit/${stu.id}`}>Update</Link>
          <Link to='/add/'>Add</Link>
          <button onClick={()=>handleDelete(stu.id)}>Delete</button>
          </td>
          </tr>
        }
        )}
      
      </table>
    </div>
  )
}

export default Home
