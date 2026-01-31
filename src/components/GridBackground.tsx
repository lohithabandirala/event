import React from 'react'

const GridBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-deep-dark overflow-hidden">
            {/* SVG Grid Pattern */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                        {/* Horizontal grid line - much brighter */}
                        <path d="M 50 0 L 0 0" fill="none" stroke="rgba(0, 243, 255, 0.6)" strokeWidth="1.5" />
                        {/* Vertical grid line - much brighter */}
                        <path d="M 0 0 L 0 50" fill="none" stroke="rgba(0, 243, 255, 0.6)" strokeWidth="1.5" />

                        {/* Glowing dot at intersection - larger and brighter */}
                        <circle cx="0" cy="0" r="3" fill="rgba(0, 243, 255, 1)">
                            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                        </circle>

                        {/* Inner glow around dot */}
                        <circle cx="0" cy="0" r="6" fill="rgba(0, 243, 255, 0.6)" opacity="0.8">
                            <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
                        </circle>

                        {/* Outer glow around dot */}
                        <circle cx="0" cy="0" r="10" fill="rgba(0, 243, 255, 0.3)" opacity="0.5">
                            <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
                        </circle>
                    </pattern>

                    {/* Very subtle vignette to not hide the grid */}
                    <radialGradient id="vignette">
                        <stop offset="0%" stopColor="rgba(10, 14, 39, 0)" />
                        <stop offset="85%" stopColor="rgba(10, 14, 39, 0.2)" />
                        <stop offset="100%" stopColor="rgba(10, 14, 39, 0.5)" />
                    </radialGradient>

                    {/* Stronger glow spots */}
                    <radialGradient id="glow1">
                        <stop offset="0%" stopColor="rgba(0, 243, 255, 0.25)" />
                        <stop offset="100%" stopColor="rgba(0, 243, 255, 0)" />
                    </radialGradient>

                    <radialGradient id="glow2">
                        <stop offset="0%" stopColor="rgba(255, 0, 110, 0.25)" />
                        <stop offset="100%" stopColor="rgba(255, 0, 110, 0)" />
                    </radialGradient>

                    <radialGradient id="glow3">
                        <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
                        <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
                    </radialGradient>
                </defs>

                {/* Apply grid pattern */}
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Multiple animated glow spots for depth */}
                <circle cx="15%" cy="25%" r="400" fill="url(#glow1)" opacity="0.7">
                    <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="85%" cy="75%" r="450" fill="url(#glow2)" opacity="0.6">
                    <animate attributeName="opacity" values="0.4;0.7;0.4" dur="5s" repeatCount="indefinite" />
                </circle>
                <circle cx="50%" cy="50%" r="350" fill="url(#glow3)" opacity="0.4">
                    <animate attributeName="opacity" values="0.3;0.5;0.3" dur="6s" repeatCount="indefinite" />
                </circle>

                {/* Apply subtle vignette overlay */}
                <rect width="100%" height="100%" fill="url(#vignette)" />
            </svg>
        </div>
    )
}

export default GridBackground
