import React from 'react';

const InfoCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode;}> = ({ title, icon, children }) => (
    <div className={`
        group relative bg-brand-card backdrop-blur-xl p-8 rounded-2xl border border-white/10
        transition-all duration-300 hover:-translate-y-1 h-full overflow-hidden
    `}>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/0 to-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
            <div className="mb-6 inline-block bg-brand-dark p-4 rounded-xl border border-white/10">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-brand-white mb-4">{title}</h3>
            <p className="text-brand-light leading-relaxed">{children}</p>
        </div>
    </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-center text-brand-white">The Hemplex Advantage</h2>
            <p className="text-brand-light mt-4 text-lg">
                We've built a high-performance ecosystem designed for security, speed, and true financial freedom.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <InfoCard 
                title="Secure by Design" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12 12 0 0012 21.414a12 12 0 008.618-15.408z" /></svg>}
            >
                Built on the robust Solana network, HEMPLEX benefits from top-level security protocols and a globally distributed network of validators, ensuring your assets are always safe.
            </InfoCard>
            <InfoCard 
                title="Instant & Scalable" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            >
                Experience the power of high-speed transactions and low fees. Our infrastructure is built to scale, providing a seamless experience for payments, rewards, and trading.
            </InfoCard>
            <InfoCard 
                title="Rewards & Freedom" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            >
                Our vision is to empower users with financial sovereignty. Earn HMPX through our integrated reward system and participate in a decentralized economy, free from traditional constraints.
            </InfoCard>
            <InfoCard 
                title="Community & Ecosystem" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            >
                HEMPLEX is more than a token; it's a growing ecosystem. From our e-shop rewards to the exclusive Hemplex Club, we are building a community-first project with real-world utility.
            </InfoCard>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;