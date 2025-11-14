import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Tokenomics from './components/Tokenomics';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import InstallationGuide from './components/InstallationGuide';
import Roadmap from './components/Roadmap';
import Socials from './components/Socials';
import Footer from './components/Footer';
import CodeMatrixBackground from './components/CodeMatrixBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-brand-dark text-brand-light font-sans">
      <CodeMatrixBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Partners />
          <Tokenomics />
          <About />
          <HowItWorks />
          <Features />
          <InstallationGuide />
          <Roadmap />
          <Socials />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;