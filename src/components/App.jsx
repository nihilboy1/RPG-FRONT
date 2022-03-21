import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Historia from './Historia'
import Diarios from './Diarios'
import Regras from './Regras'
import Npcs from './Npcs'
import Bugbear from "./Bugbear"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/historia' element={<Historia/>}/>
          <Route path="/diarios" element={<Diarios/>}/>
          <Route path="/regras" element={<Regras/>}/>
          <Route path="/npcs" element={<Npcs/>}/>
          <Route path="/bugbear" element={<Bugbear/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
