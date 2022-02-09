
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or notuse
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark Mode has been enabled", "success")
      //document.title ="Dark-Mode";--------->just for changing title and to show it for sometime i think use set interval
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success")

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-1">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<Textform showAlert={showAlert} headline="Enter the text to analyze" mode={mode} />} />
          </Routes>
  
      </div>
    </Router>
    </> 

  );
}

export default App;
