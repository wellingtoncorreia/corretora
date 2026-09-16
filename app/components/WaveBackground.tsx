import React, { SVGProps } from 'react';

export function WaveBackground(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 4961 815"
      version="1.1"
      xmlSpace="preserve"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      {...props}
    >
      <path
        d="M0,815.098l4960.63,0c0,0 -1935.093,-655.206 -2616.897,-739.751c-553.356,-68.618 -1217.953,-114.838 -1607.762,-28.152c-443.109,98.539 -735.971,485.88 -735.971,485.88l0,282.023"
        fill="#fff"
        stroke="#000"
        strokeWidth={1}
      />
    </svg>
  );
}