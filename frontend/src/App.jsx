import Principal from "./pages/principal/Principal"
import Postar from "./pages/postar/Postar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"

function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='postagens' element={<Principal/> }/>
        <Route path='/' element={<Postar/>}/>
      </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
