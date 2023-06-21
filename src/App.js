import React from 'react'
import { useState } from 'react';
import "./App.css";
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './Navbar';
import Text from './Text';
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState('null')
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Light Mode has been enabled", "success")
    }
  }
  return (
    <>
      <div>
        <Navbar title="Devs" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path='/about'  element={<About mode={mode} />} />
            <Route path='/' element={<Text showAlert={showAlert} head="Text Analyzer....!!" />} />
          </Routes>
        </div>
      </div>

    </>
  )
}
