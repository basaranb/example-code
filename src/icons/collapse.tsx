import React from 'react';

const CollapseIcon = ({ color = '#FFF' }: { color?: string }) => (
    <svg height="32" width="32">
        <path stroke="white" strokeWidth="4" d="M16 20 L0 32"  strokeLinecap="round" fill={color} />
        <path stroke="white" strokeWidth="4" d="M16 20 L32 32"   strokeLinecap="round" fill={color}/>
    </svg>
);

export default CollapseIcon;