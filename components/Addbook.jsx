import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import  "../styles/addbook.css"

const Addbook = () => {
  let [title,setTitle]= useState("")
  let [pageCount,setPageCount]=useState("")
  let [authors,setAuthors]=useState("")
  let [Category,setCategory]=useState("")
  let [description,setDescription]=useState("")
  let [thumbnailUrl,setThumbnailUrl]=useState("")

  let Navigate=useNavigate()

  let Submit=(e)=>{
    e.preventDefault()
    let data={title,pageCount,authors,
      Category,description,thumbnailUrl}
    
    fetch(" http://localhost:8000/books",
    {
        method:'POST',
        headers:{'content-Type':'application/json'},
        body:JSON.stringify(data)
  })
  alert("Book added Successfully")

  Navigate('/book-list')
    
  }


  return (
    <div className="addbook">
      <Navbar/>
      <div className="box1">
                <div className="title">
                <h1>Add Books</h1>
                </div>
                <div className="forms">
                    <form action="" onSubmit={Submit}>
                       
                    <label style={{margin:"0px" , padding:"35px"}} htmlFor="">Title:</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="enter title" />
                   <br />
                    <label style={{margin:"0px" , padding:"30px"}} htmlFor="">Pages:</label>
                    <input type="text" value={pageCount} onChange={(e)=>setPageCount(e.target.value)} placeholder="enter the pagecount" />
                    <br />
                    <label style={{margin:"0px" , padding:"30px"}} htmlFor="">Author:</label>
                    <input type="text" value={authors} onChange={(e)=>setAuthors(e.target.value)} placeholder="enter the author" />
                    <br />
                   <label style={{margin:"0px" , padding:"23px"}} htmlFor="">Category:</label>
                    <input type="text" value={Category} onChange={(e)=>setCategory(e.target.value)} placeholder="enter the category" />
                    <br />
                    <label style={{margin:"0px" , padding:"18px"}} htmlFor="">Description:</label>
                    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="enter the description" />
                    <br />
                    <label style={{margin:"0px" , padding:"26px"}} htmlFor="">ImageUrl:</label>
                    <input type="text"value={thumbnailUrl} onChange={(e)=>setThumbnailUrl(e.target.value)} placeholder="enter the image url" />
                    
                    <br />
    
                    <button style={{marginLeft:"50px" , padding:"0px"}}>Submit</button>
                    <button>Cancel</button>
                    </form>

                </div>
            </div>
       
    </div>
  )
}

export default Addbook;
