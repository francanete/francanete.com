import * as React from "react";

export interface WebsiteIconProps {
  size?: number;
  fill?: string;
}

export const WebsiteIcon = ({ size }: WebsiteIconProps) => (
  <span>
    <svg
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 380.24"
      width={size}
      height={size}
    >
      <path d="M34.66 0h442.68C496.4 0 512 15.6 512 34.66v310.92c0 19.06-15.6 34.66-34.66 34.66H34.66C15.6 380.24 0 364.64 0 345.58V34.66C0 15.6 15.6 0 34.66 0zm173.92 264.36c5.76 5.04 6.34 13.81 1.3 19.57-5.05 5.76-13.81 6.35-19.57 1.3l-52.73-46.19c-5.76-5.05-6.35-13.81-1.3-19.58.43-.49.89-.94 1.37-1.36l52.66-46.14c5.76-5.04 14.52-4.46 19.57 1.31 5.04 5.76 4.46 14.52-1.3 19.57l-40.82 35.76 40.82 35.76zm113.11 20.87c-5.76 5.05-14.52 4.46-19.57-1.3-5.04-5.76-4.46-14.53 1.3-19.57l40.82-35.76-40.82-35.76c-5.76-5.05-6.34-13.81-1.3-19.57 5.05-5.77 13.81-6.35 19.57-1.31l52.66 46.14c.48.42.94.87 1.37 1.36 5.05 5.77 4.46 14.53-1.3 19.58l-52.73 46.19zm-65.95-124.31c1.74-7.47 9.22-12.12 16.69-10.38 7.47 1.74 12.12 9.22 10.38 16.69l-30.13 129.04c-1.74 7.48-9.22 12.13-16.69 10.39-7.47-1.74-12.12-9.22-10.38-16.69l30.13-129.05zM22.03 97.05v251.91a9.56 9.56 0 0 0 9.59 9.59H481.8a9.56 9.56 0 0 0 9.59-9.59V97.05H22.03zm422.32-58.09c9.46 0 17.12 7.67 17.12 17.12 0 9.46-7.66 17.12-17.12 17.12-9.45 0-17.12-7.66-17.12-17.12 0-9.45 7.67-17.12 17.12-17.12zm-116.03 0c9.46 0 17.12 7.67 17.12 17.12 0 9.46-7.66 17.12-17.12 17.12-9.45 0-17.11-7.66-17.11-17.12 0-9.45 7.66-17.12 17.11-17.12zm58.02 0c9.45 0 17.12 7.67 17.12 17.12 0 9.46-7.67 17.12-17.12 17.12-9.45 0-17.12-7.66-17.12-17.12 0-9.45 7.67-17.12 17.12-17.12z" />
    </svg>
  </span>
);
