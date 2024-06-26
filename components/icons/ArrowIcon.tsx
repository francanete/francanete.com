import React from 'react';

export interface ArrowIconProps {
  size?: number;
  fill?: string;
}

export default function ArrowIcon({
  size,
  fill = 'currentColor',
}: ArrowIconProps) {
  return (
    <div>
      <svg
        className="w-3 h-3"
        width={size}
        height={size}
        fill={fill}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}
