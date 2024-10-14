import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Form from './Components/Form/Form';
import Users from './Components/Users/Users';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Sidebar from './Components/Sidebar/Sidebar';
import { Route, Routes, useLocation } from 'react-router-dom';
const App = () => {

  const location = useLocation();

  const isHome = location.pathname==='/';

  const containerStyle = {
    padding : isHome ? '0' : '20px'
  }

  return (
    <div className='app'>
      <div className="side">
        <Sidebar />
      </div>
      <div className="main" style={containerStyle}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App