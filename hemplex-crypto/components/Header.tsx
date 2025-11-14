import React, { useState, useEffect } from 'react';

const LogoIcon = () => (
  <svg className="w-8 h-8 text-brand-primary" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor"/>
    <path d="M50 5L90.65 27.5V72.5L50 95L9.35 72.5V27.5L50 5Z" fill="#0A0F14"/>
    <path d="M30 30H40V45H60V30H70V70H60V55H40V70H30V30Z" fill="white"/>
  </svg>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#tokenomics', label: 'Tokenomics' },
    { href: '#about', label: 'About' },
    { href: '#how-it-works', label: 'Advantage' },
    { href: '#features', label: 'Features' },
    { href: '#guide', label: 'Guide' },
    { href: '#roadmap', label: 'Roadmap' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/70 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-3">
          <LogoIcon />
          <span className="text-xl font-bold tracking-wider text-brand-white">HEMPLEX</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-brand-light hover:text-brand-white transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
           <a href="#socials" onClick={(e) => handleLinkClick(e, '#socials')} className="px-5 py-2 text-sm bg-brand-white text-brand-dark font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300">
              Community
            </a>
        </div>


        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-light focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
       {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-0 mx-4 mb-4 flex flex-col space-y-2 bg-brand-card/95 backdrop-blur-md p-4 rounded-lg border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-brand-light hover:text-brand-white transition-colors duration-300 py-2 px-3 text-left rounded-md hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
            <a href="#socials" onClick={(e) => handleLinkClick(e, '#socials')} className="bg-brand-white text-brand-dark font-semibold mt-2 py-2 px-3 text-center rounded-lg hover:bg-opacity-90">
              Community
            </a>
        </div>
      )}
    </header>
  );
};

export default Header;