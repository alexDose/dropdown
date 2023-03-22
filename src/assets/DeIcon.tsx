import React from 'react';

const DeIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="white"/>
            <mask id="mask0_1426_225" maskUnits="userSpaceOnUse" x="1" y="4" width="22" height="16">
                <rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="white"/>
            </mask>
            <g mask="url(#mask0_1426_225)">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.5 9.5H22.5V4.5H1.5V9.5Z" fill="#262626"/>
                <g filter="url(#filter0_d_1426_225)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 14.5H22.5V9.5H1.5V14.5Z" fill="#F01515"/>
                </g>
                <g filter="url(#filter1_d_1426_225)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 19.5H22.5V14.5H1.5V19.5Z" fill="#FFD521"/>
                </g>
            </g>
            <defs>
                <filter id="filter0_d_1426_225" x="1.5" y="9.5" width="21" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1426_225"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1426_225" result="shape"/>
                </filter>
                <filter id="filter1_d_1426_225" x="1.5" y="14.5" width="21" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1426_225"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1426_225" result="shape"/>
                </filter>
            </defs>
        </svg>
    );
};

export default DeIcon;
