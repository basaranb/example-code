import React from 'react';

const PauseIcon = ({ color = '#FFF' }: { color?: string }) => (
    <svg width="38px" height="42px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" width="16" height="42" fill={color} />
        <rect x="22" width="16" height="42" fill={color} />
    </svg>
);

export default PauseIcon;