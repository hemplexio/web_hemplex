import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const tokenAddress = 'HMPLX1Fvj3aC8gGf2YpV3wK7zF3nL9cK1bZ2jYx3a';

  const handleCopy = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="h-screen min-h-[700px] flex flex-col items-center justify-center relative px-4 overflow-hidden">
        <div className="container mx-auto text-center z-10">
            <div className="max-w-4xl mx-auto animate-fade-in">
                <h1 className="text-7xl sm:text-8xl md:text-[160px] lg:text-[200px] font-black text-brand-white tracking-tighter uppercase" style={{ textShadow: '0 0 50px rgba(56, 189, 248, 0.5)'}}>
                    HEMPLEX
                </h1>
            </div>
            <div className="mt-8 max-w-lg mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-brand-card backdrop-blur-xl border border-white/10 rounded-lg p-3 flex items-center justify-between">
                <span className="text-brand-light text-sm md:text-base truncate mr-4">{tokenAddress}</span>
                <button 
                  onClick={handleCopy}
                  className="bg-brand-primary/20 text-brand-primary text-sm font-semibold px-4 py-2 rounded-md hover:bg-brand-primary/30 transition-all duration-300 w-28 text-center"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
             <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <a 
                    href="https://dexscreener.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3 bg-brand-primary text-brand-dark font-bold rounded-lg hover:bg-opacity-90 transition-transform duration-300 hover:scale-105"
                >
                    DEX Screener
                </a>
                 <a 
                    href="#"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-brand-primary text-brand-primary font-bold rounded-lg hover:bg-brand-primary/10 transition-all duration-300"
                >
                    BUY HMPX
                </a>
            </div>
        </div>
        <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-lg h-24 bg-gradient-to-t from-brand-dark to-transparent z-20"
            aria-hidden="true"
        />
    </section>
  );
};

export default Hero;