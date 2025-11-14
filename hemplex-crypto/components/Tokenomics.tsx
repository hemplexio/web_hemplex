import React, { useState, useCallback } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts';
import type { TokenomicsDataItem } from '../types';

const data: TokenomicsDataItem[] = [
  { name: 'Liquidity Pool', value: 50, fill: '#38BDF8' },
  { name: 'E-shop Rewards', value: 30, fill: '#60A5FA' },
  { name: 'Marketing', value: 10, fill: '#2563EB' },
  { name: 'Development Team', value: 5, fill: '#1E40AF' },
  { name: 'Hemplex Club Amsterdam', value: 5, fill: '#1E3A8A' },
];

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={'#FFF'} className="font-bold text-3xl">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
       <text x={cx} y={cy} dy={30} textAnchor="middle" fill={'#9CA3AF'} className="text-sm">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke={'#10161E'}
        strokeWidth={4}
      />
    </g>
  );
};

const GlassCard: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="relative p-8 bg-brand-card backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.15),_transparent_40%)] opacity-70 animate-aurora" />
    <div className="relative z-10">{children}</div>
  </div>
);


const Tokenomics: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = useCallback((_: any, index: number) => {
        setActiveIndex(index);
    }, [setActiveIndex]);

  return (
    <section id="tokenomics" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2 text-brand-white">Tokenomics</h2>
        <p className="text-brand-light mb-12">Total Supply: 100,000,000,000 HMPX</p>
        <div className="max-w-5xl mx-auto">
          <GlassCard>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      activeIndex={activeIndex}
                      activeShape={renderActiveShape}
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={90}
                      outerRadius={120}
                      dataKey="value"
                      onMouseEnter={onPieEnter}
                      stroke="none"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} className="focus:outline-none" />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full md:w-1/2">
                 <ul className="flex flex-col space-y-4 text-left">
                    {data.map((entry, index) => (
                        <li 
                            key={`item-${index}`} 
                            className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 cursor-pointer ${index === activeIndex ? 'bg-white/5' : ''}`}
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            <span className="w-4 h-4 rounded-full" style={{ backgroundColor: entry.fill }}></span>
                            <span className="text-brand-light flex-1">{entry.name}</span>
                            <span className="font-bold text-brand-white">{entry.value}%</span>
                        </li>
                    ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;