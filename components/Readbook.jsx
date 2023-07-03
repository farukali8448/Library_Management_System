import Navbar from "./Navbar"
import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import "../styles/readbook.css"

const Readbook = () => {
    let  params=useParams()

    let [books,setBook]=useState([])
    

    useEffect (() => {
                     let fetchData=async()=>{
                      let response=await fetch(`http://localhost:8000/books/${params.id}`)
                      let data=await response.json()
                      setBook(data)
                    }
                    fetchData()
     })

  return (
    <div className="readbook">
        <Navbar/>
        <div className="wholecontent">
          <div className="picture">
              <img src={books.thubnailUrl} alt=""/>
          </div>
          <div className="contents">
            <h1>Title:{books.title}</h1>
            <h1>Author:{books.authors}</h1>
            <h3>Short Description:</h3><p>{books.shortDescription}</p>
            <h3>Long Description:</h3><p>{books.longDescription}</p>

          </div>

        </div>
      
    </div>
  )
}

export default Readbook
