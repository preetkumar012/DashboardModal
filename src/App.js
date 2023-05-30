import React from 'react'
import Appbar from './Dashboard/Appbar'
import Post from './Dashboard/Pages/Post'
import User from './Dashboard/Pages/User'
import Dashboard from './Dashboard/Pages/Dashboard'
import Logout from './Dashboard/Pages/Logout'
import Login from './Dashboard/Pages/Login'
import PrivateComponent from './Dashboard/Pages/PrivateComponent'
  //  import Modal from './Dashboard/Pages/Modal'
  // import Login from './Dashboard/Pages/Login'




import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Appbar/>

           <Routes>
          
           <Route element={<PrivateComponent />}>
     {/** <Route path="/" element={<Appbar/>}/>*/} 
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/post" element={<Post />} />
            <Route path="/logout" element={<Logout />} />
           
          </Route> 
           <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App