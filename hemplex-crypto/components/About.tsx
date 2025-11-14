import React from 'react';

const GlassCard: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="relative p-8 md:p-12 bg-brand-card backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden animate-fade-in-up">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.1),_transparent_50%)] opacity-70 animate-aurora" />
    <div className="relative z-10">{children}</div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-brand-white">About HEMPLEX</h2>
            <GlassCard>
                <div className="text-brand-light text-lg leading-relaxed space-y-6 text-left">
                    <p>
                        HEMPLEX began not as a currency, but as an idea: to revolutionize the customer experience. Originally developed as a unique rewards system for our e-shop and physical stores, our goal was to create an unparalleled shopping journey for our valued community.
                    </p>
                    <p>
                        As advocates for personal liberty, we believe that freedom should extend to every transaction. We champion a future where payments are not restricted to cash or cards, but are empowered by the security and autonomy of cryptocurrency. This conviction led us to a natural conclusion: why not build our own coin?
                    </p>
                    <p>
                        Thus, HEMPLEX was born. It is more than just a token; it's a currency backed by our established brand, guaranteed by our reputation, and supported by a community of thousands of satisfied customers and enthusiasts. It is the embodiment of our vision for a freer, more rewarding digital economy.
                    </p>
                </div>
            </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default About;