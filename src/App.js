import React from 'react'
import "./links.scss";
import "./App.css"
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Genre from "./components/Genre";
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Movies/>
      <Genre/>
    </div>
  )
}

export default App