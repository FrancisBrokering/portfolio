import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/NavBar';
import Banner from './components/Banner'
import Skills from './components/Skills'
import './App.css'
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WorkExperience } from './components/WorkExperience';

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
