import React from 'react';

const FeatureCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode; delay: number; }> = ({ title, icon, children, delay }) => (
    <div 
        className="group relative bg-brand-card backdrop-blur-xl p-8 rounded-2xl border border-white/10 overflow-hidden h-full opacity-0 animate-fade-in-up"
        style={{ animationDelay: `${delay}s`}}
    >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.1),_transparent_40%)] opacity-70 animate-aurora" />
        <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-6 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-brand-white mb-4">{title}</h3>
            <p className="text-brand-light leading-relaxed">{children}</p>
        </div>
    </div>
);

const HyperRewardIcon = () => (
    <svg width="96" height="96" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="hyperRewardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#glow)" className="transition-transform duration-300 group-hover:scale-110">
            <circle cx="50" cy="50" r="11" fill="url(#hyperRewardGradient)" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="url(#hyperRewardGradient)" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="url(#hyperRewardGradient)" strokeWidth="1" opacity="0.5" />
        </g>
    </svg>
);

const SovereignVaultIcon = () => (
    <svg width="96" height="96" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="vaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
             <filter id="vaultGlow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#vaultGlow)" className="transition-transform duration-300 group-hover:scale-110">
            <path d="M50 10 L90 30 V 70 L50 90 L10 70 V 30 Z" fill="none" stroke="url(#vaultGradient)" strokeWidth="3" />
            <path d="M50 10 L90 30 V 70 L50 90 L10 70 V 30 Z" fill="url(#vaultGradient)" fillOpacity="0.1" />
            <path d="M50 42 V 58 M42 50 H 58" stroke="#F9FAFB" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
    </svg>
);

 const LivingNFTIcon = () => (
     <svg width="96" height="96" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="nftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <filter id="nftGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#nftGlow)" className="transition-transform duration-300 group-hover:scale-110">
            <path d="M25 35 L75 35 L75 85 L25 85 Z" stroke="url(#nftGradient)" strokeWidth="2" fill="url(#nftGradient)" fillOpacity="0.1" transform="rotate(-10 50 50)" />
            <path d="M25 25 L75 25 L75 75 L25 75 Z" stroke="url(#nftGradient)" strokeWidth="3" fill="none" />
        </g>
    </svg>
);


const Features: React.FC = () => {
    const featureData = [
        {
            title: 'Hyper-Reward Protocol',
            icon: <HyperRewardIcon />,
            description: 'Our dynamic protocol algorithmically adjusts rewards based on network participation, loyalty, and transaction volume. The more you engage, the more you earn.',
        },
        {
            title: 'Sovereign Identity Vault',
            icon: <SovereignVaultIcon />,
            description: 'Take control of your digital self. HEMPLEX provides a decentralized identity vault, ensuring your data is yours alone, secured on the blockchain.',
        },
        {
            title: 'Living NFT Access Keys',
            icon: <LivingNFTIcon />,
            description: 'Access to the Hemplex Club is via a dynamic, evolving NFT. Your key morphs and gains new visual traits based on your achievements within the ecosystem.',
        },
    ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-center text-brand-white">Key Features</h2>
            <p className="text-brand-light mt-4 text-lg">
                Discover an ecosystem built for utility, community, and a decentralized future.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featureData.map((feature, index) => (
                <FeatureCard key={feature.title} title={feature.title} icon={feature.icon} delay={index * 0.2}>
                    {feature.description}
                </FeatureCard>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;