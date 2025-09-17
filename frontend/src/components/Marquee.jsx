import React from 'react';
import { MARQUEE_TEXT } from '../benson-langford-assets-main/constants';

const Marquee = () => {
  return (
    <div className="mt-16 w-full bg-lime-300 text-black lg:py-16 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee" style={{
        animation: 'marquee 5s linear infinite'
      }}>
        {[...Array(2)].map((_, i) => (
          <h1
            key={i}
            className="py-2 text-3xl font-bold leading-none tracking-tighter lg:text-7xl"
          >
            {MARQUEE_TEXT}
          </h1>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
