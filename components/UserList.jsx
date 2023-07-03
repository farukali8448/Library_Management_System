import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
 import '../styles/userlist.css'
// import "../Data/db.json"


const UserList = () => {
  let [lb,setLb]=useState(null)

  useEffect(()=>{
    let fetchData=async()=>{
      let response=await fetch("http://localhost:8000/users")
      let data=await response.json()
      setLb(data)
    }
    fetchData()
  },[])
  

  let deleteuser=(id,FirstName)=>{
    fetch(`http://localhost:8000/users/${id}`,
    {
      method:'DELETE'
    })
    alert(`${FirstName} has been deleted permanantly`)
  }
  return (
    <div className='userlist'>
      <Navbar/>
      <h1 className="header1">USER DETAILS</h1>
      {lb && <div className="container1">
       
           {lb.map((x)=>(
            <div className="userss">
                  <div className="displayalpha">
                    <h1>{x.FirstName[0].toUpperCase()}</h1>
                  </div>
                  <div className="sentence">
                    <h1>{x.FirstName}{x.LastName}</h1>
                     <h3>Email:{x.Email}</h3>
                     <h3>Contact:{x.Contact}</h3>
                     <button onClick={() => deleteuser(x.id, x.FisrtName)} className="three">  <Link >Delete</Link></button>
                     <button className="two"> <Link to={`/user-list/${x.id}`} >Add user</Link></button> 
                </div>
            </div>
           ))}
       </div>}
      
    </div>
  )
}

export default UserList
