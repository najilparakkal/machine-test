import React from 'react'

const ClipboardIcon = ({  size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="bg-black p-2 h-12 rounded-md w-full"
    >
      <defs > 
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect x="8" y="4" width="16" height="24" rx="2" stroke="#06B6D4" strokeWidth="2" />
      <rect x="11" y="2" width="10" height="4" rx="1" stroke="#06B6D4" strokeWidth="2" />
      <line x1="12" y1="12" x2="20" y2="12" stroke="#06B6D4" strokeWidth="2" />
      <line x1="12" y1="18" x2="20" y2="18" stroke="#06B6D4" strokeWidth="2" />
      <rect x="14" y="28" width="4" height="1" fill="#06B6D4" filter="url(#glow)" />
    </svg>
  )
}

export default ClipboardIcon