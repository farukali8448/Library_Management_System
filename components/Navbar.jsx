import {Link} from "react-router-dom"
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">

        <div className="logo">
            <div className="imgs">
                <img src="data:image/jpeg;base64,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" alt="logo" width="120px"/>
            </div>
            <div className="name">
                <h1>KNOWLEDGE  LIBRARY</h1>
            </div>
        </div>
        
        <div className="links">
            <ul>
                <li><Link to="/admin" >Home</Link></li>
                <li><Link to="/book-list" >Book List</Link></li>
                <li><Link to="/user-list" >User List</Link></li>
                <li><Link to="/add-book" >Add Book</Link></li>
                <li><Link to="/add-user" >Add User</Link></li>
                <li><Link to="/" >Logout</Link></li>
            </ul>
         </div>
     </div>
  );
}

export default Navbar