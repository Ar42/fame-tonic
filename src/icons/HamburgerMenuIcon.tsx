import { SVGProps } from "react";

const HamburgerMenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="1"
        y1="1.03597"
        x2="19"
        y2="1.03597"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="7.03597"
        x2="19"
        y2="7.03597"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="13.036"
        x2="19"
        y2="13.036"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HamburgerMenuIcon;
