import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Content />
      <Projects />
      <AboutMe />
      <Footer />
    </>
  )
}

export default App