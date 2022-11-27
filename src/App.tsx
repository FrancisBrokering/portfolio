import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './pages/NavBar';
import Banner from './pages/Banner'
import Skills from './pages/Skills'
import './App.css'
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
import { WorkExperience } from './pages/WorkExperience';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Banner />
        <Skills />
        <WorkExperience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
