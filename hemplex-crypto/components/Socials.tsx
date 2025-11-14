import React from 'react';

const SocialLink: React.FC<{ href: string; name: string; }> = ({ href, name }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative text-lg text-brand-light font-medium hover:text-brand-white transition-all duration-300 group"
        >
           {name}
           <span className="absolute bottom-0 left-0 h-0.5 bg-brand-primary w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </a>
    );
};

const GlassCard: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="relative p-12 bg-brand-card backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.1),_transparent_50%)] opacity-70 animate-aurora" />
    <div className="relative z-10">{children}</div>
  </div>
);


const Socials: React.FC = () => {
  return (
    <section id="socials" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <GlassCard>
            <h2 className="text-4xl font-bold mb-4 text-brand-white">Join the Community</h2>
            <p className="text-brand-light max-w-2xl mx-auto mb-12">
              Follow us on social media to stay up-to-date with the latest news, developments, and events. Become part of our growing family!
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:space-x-10">
              <SocialLink href="https://discord.com" name="Discord" />
              <SocialLink href="https://x.com" name="X" />
              <SocialLink href="https://instagram.com" name="Instagram" />
              <SocialLink href="https://github.com" name="Github" />
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Socials;