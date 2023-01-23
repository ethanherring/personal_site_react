import React from 'react';
import '../App.css';
import ScrollTopButton from '../components/ScrollTopButton';

const About = () => {


  return (

    <>


      <h1>About Page</h1>
      <p> me me me me</p>
    
    <footer className="App-footer">
    {/* Adds functionality to return to top of page */}
    <div className="scrollTopButton-container">
      <ScrollTopButton />
    </div>
  </footer>
  </>
  );
}

export default About;