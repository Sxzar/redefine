import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Story from './components/Story';
import Identity from './components/Identity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import Updates from './components/Updates';

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Story />
            <Identity />
            <Achievements />
            <Updates />
            <Contact />
            <Footer />
        </main>
    );
};

export default App;
