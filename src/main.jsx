import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Pages/Home/Home'
import Error from "./Pages/Error/Error" 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style/Home.scss'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Error/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));