import Login from "./components/Login"
import Admin from "./components/Admin"
import Navbar from "./components/Navbar"
import Booklist from "./components/Booklist"
import Addbook from "./components/Addbook"
import Adduser from "./components/Adduser"
import Readbook from "./components/Readbook"
import UserList from "./components/UserList"
import { BrowserRouter,Routes,Route } from "react-router-dom"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path="/"/>
        <Route element={<Admin/>} path="/admin"/>
        <Route element={<Navbar/>} path="/navbar"/> 
        <Route element={<Booklist/>} path="/book-list"/>
        <Route element={<Addbook/>} path="/add-book"/>
        <Route element={<Adduser/>} path="/add-user"/>
        <Route element={<Readbook/>} path="/book-list/:id"/>
        <Route element={<UserList/>} path="/user-list"/>
     </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App

