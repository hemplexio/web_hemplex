import React from 'react';

type Status = 'Completed' | 'In Progress' | 'Planned';

const statusStyles: { [key in Status]: { dot: string; text: string; } } = {
    'Completed': { dot: 'bg-green-500', text: 'text-green-400' },
    'In Progress': { dot: 'bg-yellow-500 animate-pulse', text: 'text-yellow-400' },
    'Planned': { dot: 'bg-gray-500', text: 'text-gray-400' },
};

const RoadmapItem: React.FC<{ title: string; status: Status; children: React.ReactNode; isLast?: boolean }> = ({ title, status, children, isLast }) => (
    <div className="flex">
        <div className="flex flex-col items-center mr-6">
            <div className="relative">
                <div className={`w-4 h-4 rounded-full ${statusStyles[status].dot} mt-1 border-4 border-brand-dark box-content`}></div>
            </div>
            {!isLast && <div className="w-px h-full bg-white/10 mt-2"></div>}
        </div>
        <div className="pb-12">
            <p className="mb-1 text-xl font-bold text-brand-white">{title}</p>
            <p className={`text-sm font-semibold mb-3 ${statusStyles[status].text}`}>{status}</p>
            <div className="text-brand-light space-y-2">{children}</div>
        </div>
    </div>
);

const GlassCard: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="relative p-8 bg-brand-card backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.05),_transparent_40%)] opacity-70 animate-aurora" />
    <div className="relative z-10">{children}</div>
  </div>
);


const Roadmap: React.FC = () => {
    return (
        <section id="roadmap" className="py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-center text-brand-white">Our Roadmap</h2>
                    <p className="text-brand-light mt-4 text-lg">
                        Charting the course for the future of HEMPLEX. Here's a look at our journey and where we're headed next.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                  <GlassCard>
                    <div className="animate-fade-in-up">
                        <h3 className="text-2xl font-bold text-brand-primary mb-6 pl-10">Phase 1: Foundation</h3>
                        <RoadmapItem title="Concept & Whitepaper" status="Completed">
                            <p>Initial idea development and publication of the official HEMPLEX whitepaper outlining our vision and technology.</p>
                        </RoadmapItem>
                        <RoadmapItem title="Token Launch on Solana" status="Completed">
                            <p>Successful deployment of the HMPX token smart contract on the Solana mainnet.</p>
                        </RoadmapItem>
                        <RoadmapItem title="Liquidity Pool Creation" status="Completed">
                           <p>Established the initial liquidity pool on a major Solana DEX to enable trading.</p>
                        </RoadmapItem>
                    </div>
                     <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                        <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-6 pl-10">Phase 2: Growth</h3>
                        <RoadmapItem title="E-Shop Reward Integration" status="Completed">
                            <p>Integrating HMPX as the core of our e-shop and in-store rewards program, providing real-world utility.</p>
                        </RoadmapItem>
                        <RoadmapItem title="Community Marketing Campaign" status="Completed">
                            <p>Large-scale marketing initiatives to expand our community reach and increase token awareness.</p>
                        </RoadmapItem>
                    </div>
                     <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                        <h3 className="text-2xl font-bold text-brand-accent mt-8 mb-6 pl-10">Phase 3: Expansion</h3>
                        <RoadmapItem title="Hemplex Club Amsterdam" status="In Progress">
                            <p>Launch of the exclusive Hemplex Club, offering unique benefits and experiences for token holders.</p>
                        </RoadmapItem>
                        <RoadmapItem title="CEX Listing Applications" status="Planned" isLast={true}>
                            <p>Initiating the application process for listing HMPX on major centralized exchanges to improve accessibility.</p>
                        </RoadmapItem>
                    </div>
                  </GlassCard>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;