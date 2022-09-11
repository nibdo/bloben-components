import React from 'react';

const CheckIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={props.className}
    fill={props.fill}
    style={props.style}
  >
    <g data-name="Layer 2">
      <g data-name="checkmark">
        <rect width="24" height="24" opacity="0" />
        <path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z" />
      </g>
    </g>
  </svg>
);

export default CheckIcon;