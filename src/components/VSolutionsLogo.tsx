import React from 'react';

export default function VSolutionsLogo() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        {/* V Logo */}
        <div className="relative">
          <svg
            viewBox="0 0 100 100"
            className="w-20 h-20"
            style={{ transform: 'scale(1.2)' }}
          >
            {/* Orange part */}
            <path
              d="M 50,0 L 100,50 L 75,50 L 50,25 L 50,0"
              fill="#FF6B00"
            />
            {/* Teal part */}
            <path
              d="M 50,25 L 75,50 L 50,75 L 25,50 L 50,25"
              fill="#008B8B"
            />
            {/* Purple part */}
            <path
              d="M 50,75 L 25,50 L 0,50 L 50,100 L 50,75"
              fill="#4B0082"
            />
          </svg>
        </div>
        {/* Solutions text */}
        <span className="text-[#333333] text-5xl font-bold ml-2">-Solutions</span>
      </div>
      {/* Tagline */}
      <p className="text-[#333333] text-lg mt-2 tracking-wider uppercase">
        INNOVATIVE SOLUTIONS FOR EVERY CHALLENGE
      </p>
    </div>
  );
} 