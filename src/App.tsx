import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './pages/NavBar';
import Banner from './pages/Banner'
import Skills from './pages/Skills'
import './App.css'
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
import { WorkExperience } from './pages/Experiences';
import { MobileWorkExperience } from './pages/MobileExperences';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carmack from './pages/Carmack';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Banner />
                <Skills />
                <WorkExperience />
                <MobileWorkExperience />
                <Projects />
                <Contact />
                <Footer />
              </>} />
            <Route path="carmack" element={<Carmack />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
