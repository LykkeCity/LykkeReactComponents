import React from 'react';

export interface ErrorIconProps {
  backgroundColor?: string;
  signColor?: string;
}

const ErrorIcon: React.SFC<ErrorIconProps> = ({
  backgroundColor = '#ff3e2e',
  signColor = '#fff'
}) => (
  <svg width="90" height="90" xmlns="http://www.w3.org/2000/svg">
    <g>
      <ellipse
        ry="44"
        rx="44"
        id="background"
        cy="45"
        cx="45"
        strokeWidth="0"
        stroke="#000"
        fill={backgroundColor}
      />
      <g stroke="null">
        <path
          stroke="null"
          id="sign"
          d="m44.999999,69.583332c-5.9,0 -11.332916,-2.089583 -15.561249,-5.53125l34.613332,-34.613332c3.441667,4.228333 5.53125,9.66125 5.53125,15.561249c0,13.545416 -11.037916,24.583333 -24.583333,24.583333m0,-49.166665c5.9,0 11.332916,2.089583 15.561249,5.53125l-34.613332,34.613332c-3.441667,-4.228333 -5.53125,-9.66125 -5.53125,-15.561249c0,-13.545416 11.037916,-24.583333 24.583333,-24.583333m0,-4.916667c-16.274166,0 -29.499999,13.225833 -29.499999,29.499999s13.225833,29.499999 29.499999,29.499999s29.499999,-13.225833 29.499999,-29.499999s-13.225833,-29.499999 -29.499999,-29.499999"
          fillRule="evenodd"
          fill={signColor}
        />
      </g>
    </g>
  </svg>
);

export default ErrorIcon;
