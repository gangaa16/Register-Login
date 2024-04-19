import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Corrected import statement
import Login from './Login'


function App() {
 

  return (
   <BrowserRouter> {/* Corrected BrowserRouter */}
     <Routes>
       <Route path='/register' element={<Signup/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App
