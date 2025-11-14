import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="container mx-auto px-6 py-8 text-center text-brand-light">
        <p>&copy; {currentYear} HEMPLEX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;