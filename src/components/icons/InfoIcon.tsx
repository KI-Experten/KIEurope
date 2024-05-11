import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#3B81F6';
export const InfoIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    stroke-width="2" 
    stroke="black" 
    fill="none" 
    stroke-linecap="round" 
    stroke-linejoin="round">
    
    <circle cx="12" cy="12" r="10" />
    <text x="11" y="16" font-size="12" font-family="Arial" fill="black">i</text>
  </svg>

);
