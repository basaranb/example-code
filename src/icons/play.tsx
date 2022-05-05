import React from 'react';

const PlayIcon = ({ color = '#FFF' }: { color?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <path
            fill={color}
            fillRule="evenodd"
            // eslint-disable-next-line max-len
            d="M12.258 4.696L31.745 17.84c1.483 1.016 1.483 3.303 0 4.297L12.258 35.305c-1.604 1.091-3.687-.128-3.687-2.136V6.832c0-2.009 2.083-3.23 3.687-2.136"
        />
    </svg>
);

export default PlayIcon;
