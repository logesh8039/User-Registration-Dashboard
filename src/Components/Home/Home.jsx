import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <h2>Welcome To Our Websites</h2>
      <h4>A contact form or live chat option for businesses to get in touch.</h4>
      <p>As a part of your content marketing roadmap, your blog is a direct route for convincing visitors that your product or service can be a huge game-changer for them.</p>
      <div className="btns">
        <button className='about-btn'><Link to='./about'>About us</Link></button>
        <button className='contact-btn'><Link to='./contact'>Contact us</Link></button>
      </div>
      <div className="register">
        <button className='reg-btn'><Link to='./form'>Register Here</Link></button>
      </div>
    </div>
  )
}

export default Home