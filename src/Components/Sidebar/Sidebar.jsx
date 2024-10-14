import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const [active, setActive] = useState('home');

  return (
    <div className='sidebar'>
      <div className="logo">
        <Link to='/' className='fs-1'>Company</Link>
      </div>
      <ul className='nav-link'>
        <li><Link to='/' onClick={() => setActive('home')} className={active === 'home' ? 'active' : ''} href="#">Home</Link></li>
        <li><Link to='/form' onClick={() => setActive('form')} className={active === 'form' ? 'active' : ''} href="#">Register</Link></li>
        <li><Link to='/users' onClick={() => setActive('user')} className={active === 'user' ? 'active' : ''} href="#">Users</Link></li>
        <li><Link to='/about' onClick={() => setActive('about')} className={active === 'about' ? 'active' : ''} href="#">About</Link></li>
        <li><Link to='/contact' onClick={() => setActive('contact')} className={active === 'contact' ? 'active' : ''} href="#">Contact</Link></li>
      </ul>
      <button className='login'>Login</button>
    </div>
  )
}

export default Sidebar;