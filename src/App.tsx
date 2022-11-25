import React from 'react';
import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/NavBar';
import Banner from './components/Banner'
import Skills from './components/Skills'
import './App.css'
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ChakraProvider>
  );
}

export default App;
