import React from 'react';

const Step: React.FC<{ number: number; title:string; children: React.ReactNode }> = ({ number, title, children }) => (
    <div className="flex">
        <div className="flex flex-col items-center mr-6">
            <div>
                <div className="flex items-center justify-center w-12 h-12 border-2 border-brand-primary/50 rounded-full bg-brand-dark">
                    <div className="text-xl font-bold text-brand-primary">{number}</div>
                </div>
            </div>
            <div className="w-px h-full bg-white/10"></div>
        </div>
        <div className="pb-10">
            <p className="mb-2 text-xl font-bold text-brand-white">{title}</p>
            <div className="text-brand-light space-y-2">{children}</div>
        </div>
    </div>
);

const GlassCard: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="relative p-8 bg-brand-card backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.1),_transparent_50%)] opacity-70 animate-aurora" />
    <div className="relative z-10">{children}</div>
  </div>
);


const InstallationGuide: React.FC = () => {
  return (
    <section id="guide" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-brand-white">Get Started with HEMPLEX</h2>
        <div className="max-w-3xl mx-auto">
            <GlassCard>
              <Step number={1} title="Download Phantom Wallet">
                <p>Phantom is a popular wallet for the Solana ecosystem. Download it as a browser extension or mobile app.</p>
                <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-4 py-2 bg-brand-primary text-brand-dark font-medium rounded-md hover:opacity-90 transition-colors">
                  Visit Phantom.app
                </a>
              </Step>
              <Step number={2} title="Purchase Solana (SOL)">
                <p>You will need SOL to purchase HEMPLEX. You can buy Solana on any major cryptocurrency exchange (e.g., Binance, Coinbase, Kraken) and then send it to your Phantom wallet address.</p>
              </Step>
              <Step number={3} title="Swap SOL for HMPX">
                 <p>Visit a decentralized exchange (DEX) like Raydium or Jupiter. Connect your Phantom wallet, use our official token address, and swap the desired amount of SOL for HMPX.</p>
              </Step>
              <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                      <div>
                          <div className="flex items-center justify-center w-12 h-12 border-2 border-yellow-500/50 rounded-full bg-brand-dark">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                          </div>
                      </div>
                  </div>
                  <div className="pb-8">
                      <p className="mb-2 text-xl font-bold text-yellow-300">Important Security Notice</p>
                      <div className="text-brand-light space-y-3">
                          <p>For long-term storage, we strongly recommend hardware (cold) wallets like <strong className="text-brand-white">Trezor</strong> or <strong className="text-brand-white">Ledger</strong> to keep your assets offline and secure.</p>
                          <p className="font-bold text-yellow-400">Never share your 12 or 24-word seed phrase with anyone! It is the master key to your funds. Store it securely.</p>
                      </div>
                  </div>
              </div>
            </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;