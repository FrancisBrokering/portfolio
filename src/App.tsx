import React from 'react';
import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/NavBar';
import './App.css'

function App() {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
