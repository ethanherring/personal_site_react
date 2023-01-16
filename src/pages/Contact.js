import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Contact() {
  return (
    <div className='Contact'>
      <header className="Contact-header">
        <h1>Contact Page</h1>
        <Link to="/">Home</Link>
      </header>
    </div>
  );
}

export default Contact;