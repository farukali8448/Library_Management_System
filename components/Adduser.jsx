import  Navbar from "./Navbar"
// import { useState } from "react"
import "../styles/adduser.css"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
 import "../Data/db.json"


const Adduser = () => {

 
  let FirstName=useRef(null)
  let LastName=useRef(null)
  let Email=useRef(null)
  let Contact=useRef(null)

  let Navigate=useNavigate()
 
  let user=(e)=>{
    e.preventDefault();
    
    let data={
      FirstName:FirstName.current.value,
      LastName:LastName.current.value,
      Email:Email.current.value,
      Contact:Contact.current.value
      }
      console.log(data);

      fetch("http://localhost:8000/users" , 
                                                             {method :"POST",
                                                             headers:{"content-Type":"application/json"},
                                                             body:JSON.stringify(data)
                                                            })
                                                            alert("User added successfully")
                                                            Navigate("/user-list")
    //  .then((data)=>{console.log(data)})
    // .catch((err)=>{console.log(err)})
    
    }
  

  

// let userdata={FirstName,LastName,Email,Contact}
  return (
    <div className="adduser">
        <Navbar/>
        
        <div className="bodys">
            <div className="titles">
                <h1>Add Users</h1>
            </div>

            <div className="details">
                <div className="form">
                    <form onSubmit={user}>

                        <div className="name">
                            <label  style={{margin:"0px" , padding:"30px"}}  htmlFor="" >Name: </label>
                            <input  type="text" ref={FirstName} placeholder="Enter First Name" />

                            <label style={{margin:"0px" , padding:"30px"}} htmlFor="" >Last:</label>
                            <input ref={LastName} type="text"  placeholder="Enter Last Name" />
                        </div>

                        <div className="email">
                            <label style={{margin:"0px" , padding:"30px"}} htmlFor="Email" >Email: </label>
                            <input  ref={Email} type="email" placeholder="Enter Email" />
                        </div>

                        <div className="contact">
                            <label style={{margin:"0px" , padding:"20px"}} htmlFor="" >Contact: </label>
                            <input  ref={Contact} type="number"   placeholder="Enter Contact" />
                             <br />
                            <button style={{marginLeft:"105px" , padding:"0px"}} >Add User</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adduser
