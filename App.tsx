
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import IvfInfo from './components/IvfInfo';
import SuccessStories from './components/SuccessStories';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <IvfInfo />
        <SuccessStories />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default App;
