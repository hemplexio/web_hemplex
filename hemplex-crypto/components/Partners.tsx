import React from 'react';

const logos = [
    { name: 'Phantom' },
    { name: 'Binance' },
    { name: 'Kraken' },
    { name: 'Coinbase' },
    { name: 'Raydium' },
];

const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-brand-dark relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-brand-dark to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-brand-dark to-transparent z-10" />

        <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll-x">
                {/* Render the logos twice for a seamless loop */}
                {[...logos, ...logos].map((logo, index) => (
                     <div key={`${logo.name}-${index}`} className="flex-shrink-0 mx-8">
                         <span className="text-2xl sm:text-3xl font-bold text-brand-light/50 transition-colors duration-300 hover:text-brand-white">{logo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Partners;