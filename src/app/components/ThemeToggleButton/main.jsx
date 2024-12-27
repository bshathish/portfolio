import React, { useState } from 'react';
import './themeToggle.css';
import { Box, IconButton, useTheme } from '@mui/material';
import { useThemeStore } from '../zustand/themeStore';

const ThemToggle = () => {
  const theme = useTheme();
  const { setColorScheme } = useThemeStore();
  const [hoverStyles, setHoverStyles] = useState({ transform: 'translate(0, 0)' });

  const handleToggleClick = () => {
    setColorScheme();
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10; // Scale the offset
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setHoverStyles({ transform: `translate(${x}px, ${y}px)` });
  };

  const handleMouseLeave = () => {
    setHoverStyles({ transform: 'translate(0, 0)' });
  };

  return (
    <label
      htmlFor="themeToggle"
      className="themeToggle st-sunMoonThemeToggleBtn"
      type="checkbox"
      style={{ color: theme.palette.themeButton.main, ...hoverStyles }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <input
        onClick={handleToggleClick}
        type="checkbox"
        id="themeToggle"
        className="themeToggleInput"
      />
      <svg
        width="25"
        height="25"
        viewBox="0 0 20 20"
        fill="currentColor"
        stroke="none"
        className="svg_theme"
      >
        <mask id="moon-mask">
          <rect x="0" y="0" width="20" height="20" fill="white"></rect>
          <circle cx="11" cy="3" r="8" fill="black"></circle>
        </mask>
        <circle
          className="sunMoon"
          cx="10"
          cy="10"
          r="8"
          mask="url(#moon-mask)"
        ></circle>
        <g>
          <circle className="sunRay sunRay1" cx="18" cy="10" r="1.5"></circle>
          <circle className="sunRay sunRay2" cx="14" cy="16.928" r="1.5"></circle>
          <circle className="sunRay sunRay3" cx="6" cy="16.928" r="1.5"></circle>
          <circle className="sunRay sunRay4" cx="2" cy="10" r="1.5"></circle>
          <circle className="sunRay sunRay5" cx="6" cy="3.1718" r="1.5"></circle>
          <circle className="sunRay sunRay6" cx="14" cy="3.1718" r="1.5"></circle>
        </g>
      </svg>
    </label>
  );
};

export default ThemToggle;


{/* <div class="container">
<label class="toggle" for="switch">
    <input id="switch" class="input" type="checkbox" />
    <div class="icon icon--moon">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 512 512"
        id="moon"
    >
        <g>
        <path
            fill="#6A6D68"
            d="M412.95,381.15c-8.05,10.119-16.94,19.33-26.55,27.54c-2.271,1.939-4.58,3.819-6.92,5.64   c-0.261,0.21-0.521,0.42-0.78,0.63c-0.09,0.07-0.19,0.13-0.28,0.2c-5.979,4.6-12.2,8.83-18.64,12.689   c-1.92,1.15-3.851,2.28-5.811,3.37c-18.14,10.061-37.819,17.221-58.42,21.16c-12.27,2.34-24.87,3.55-37.66,3.55   c-27.92,0-54.94-5.739-80.32-17.04c-7.74-3.46-15.3-7.43-22.47-11.81c-6.96-4.24-13.77-9-20.24-14.14   c-5.28-4.19-10.3-8.62-15.07-13.25c-1.3-1.261-2.57-2.54-3.82-3.83c-30.43-31.21-49.57-71.37-54.6-115.38   c-4.54-39.75,2.83-79.04,20.95-113.75c4.99-9.561,10.81-18.78,17.41-27.561c0.2-0.26,0.4-0.529,0.6-0.79   c0.9-1.18,1.81-2.359,2.74-3.529c37.77-47.521,94.29-74.78,155.07-74.78c45.101,0,87.641,14.87,123.021,42.99   c1.54,1.22,2.89,2.33,4.14,3.39c3.16,2.64,6.29,5.43,9.51,8.5c0.49,0.47,0.99,0.94,1.471,1.43c1.3,1.25,2.58,2.54,3.84,3.83   c32.41,33.351,51.979,77.011,55.31,123.75C458.97,293.51,443.88,342.23,412.95,381.15z"
            opacity=".9"
        ></path>
        <path
            fill="#A3AAA0"
            d="M408.95,377.15c-8.05,10.119-16.94,19.33-26.55,27.54c-2.271,1.939-4.58,3.819-6.92,5.64   c-0.261,0.21-0.521,0.42-0.78,0.63c-0.09,0.07-0.19,0.13-0.28,0.2c-5.979,4.6-12.2,8.83-18.64,12.689   c-1.92,1.15-3.851,2.28-5.811,3.37c-19.76,10.96-41.359,18.471-63.979,22.141c-10.51,1.699-21.23,2.569-32.101,2.569   c-27.92,0-54.94-5.739-80.32-17.04c-7.74-3.46-15.3-7.43-22.47-11.81c-6.96-4.24-13.77-9-20.24-14.14   c-5.21-4.141-10.17-8.511-14.89-13.08c-0.06-0.051-0.12-0.11-0.18-0.17c-32.64-31.721-53.18-73.381-58.42-119.21   c-4.54-39.75,2.83-79.04,20.95-113.75c4.99-9.561,10.81-18.78,17.41-27.561c1.09-1.449,2.2-2.89,3.34-4.319   c0.55-0.69,1.1-1.37,1.65-2.051c37.76-46.25,93.52-72.729,153.42-72.729c45.101,0,87.641,14.87,123.021,42.99   c1.54,1.22,2.89,2.33,4.14,3.39c3.16,2.64,6.29,5.43,9.51,8.5c1.811,1.72,3.58,3.48,5.311,5.26c0.05,0.061,0.11,0.11,0.16,0.17   c32.319,33.33,51.83,76.92,55.149,123.58C454.97,289.51,439.88,338.23,408.95,377.15z"
        ></path>
        <circle
            cx="285"
            cy="156"
            r="44.5"
            fill="#666865"
            stroke="#5E5E5D"
            stroke-miterlimit="10"
            stroke-width="4"
        ></circle>
        <circle
            cx="385"
            cy="300"
            r="21.5"
            fill="#666865"
            stroke="#5E5E5D"
            stroke-miterlimit="10"
            stroke-width="4"
        ></circle>
        <circle
            cx="166"
            cy="296.5"
            r="27.84"
            fill="#666865"
            stroke="#5E5E5D"
            stroke-miterlimit="10"
            stroke-width="4"
        ></circle>
        <circle
            cx="261.25"
            cy="272.75"
            r="14.75"
            fill="#666865"
            stroke="#5E5E5D"
            stroke-miterlimit="10"
            stroke-width="4"
        ></circle>
        <circle
            cx="151.5"
            cy="184"
            r="28"
            fill="#666865"
            stroke="#5E5E5D"
            stroke-miterlimit="10"
            stroke-width="4"
        ></circle>
        <circle
            cx="297.5"
            cy="382.501"
            r="27.5"
            fill="#666865"
            stroke="#5E5E5D"
            stroke-miterlimit="10"
            stroke-width="4"
        ></circle>
        <circle
            cx="395"
            cy="213"
            r="18.5"
            fill="#666865"
            stroke="#5E5E5D"
            stroke-miterlimit="10"
            stroke-width="4"
        ></circle>
        <circle
            cx="317"
            cy="216"
            r="8"
            fill="#666865"
            stroke="#5E5E5D"
            stroke-miterlimit="10"
            stroke-width="4"
        ></circle>
        <path
            fill="#666865"
            stroke="#5E5E5D"
            stroke-miterlimit="10"
            stroke-width="4"
            d="M299.55,450.38   c-12.27,2.34-24.87,3.55-37.66,3.55c-27.92,0-54.94-5.739-80.32-17.04c-7.74-3.46-15.3-7.43-22.47-11.81   c-6.96-4.24-13.77-9-20.24-14.14c-5.28-4.19-10.3-8.62-15.07-13.25c-1.3-1.261-2.57-2.54-3.82-3.83   c-0.06-0.051-0.12-0.11-0.18-0.17c-32.64-31.721-53.18-73.381-58.42-119.21c-4.54-39.75,2.83-79.04,20.95-113.75   c4.99-9.561,10.81-18.78,17.41-27.561c1.09-1.449,2.2-2.89,3.34-4.319c0.55-0.69,1.1-1.37,1.65-2.051   c-0.16,3.011-0.29,6.2-0.39,9.58c-2.39,79.15,12.97,253.43,185.661,310.98C293.12,448.41,296.31,449.42,299.55,450.38z"
            opacity=".2"
        ></path>
        </g>
    </svg>
    </div>

    <div class="w-8 icon icon--sun">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5" id="sun">
        <defs>
        <clipPath id="a">
            <path d="M0 38h38V0H0v38Z"></path>
        </clipPath>
        </defs>
        <g
        fill="#ffac33"
        clip-path="url(#a)"
        transform="matrix(1.25 0 0 -1.25 0 47.5)"
        >
        <path
            d="M17 35s0 2 2 2 2-2 2-2v-2s0-2-2-2-2 2-2 2v2zM35 21s2 0 2-2-2-2-2-2h-2s-2 0-2 2 2 2 2 2h2zM5 21s2 0 2-2-2-2-2-2H3s-2 0-2 2 2 2 2 2h2zM10.121 29.706s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.415 1.414s-1.414 1.414 0 2.829c1.415 1.414 2.829 0 2.829 0l1.414-1.415ZM31.121 8.707s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.414 1.414s-1.414 1.414 0 2.828 2.828 0 2.828 0l1.414-1.414ZM30.708 26.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828l-1.414-1.414ZM9.708 5.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828L9.708 5.879ZM17 5s0 2 2 2 2-2 2-2V3s0-2-2-2-2 2-2 2v2zM29 19c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10 0-5.522 4.477-10 10-10 5.522 0 10 4.478 10 10"
        ></path>
        </g>
    </svg>
    </div>
</label>
</div> */}
