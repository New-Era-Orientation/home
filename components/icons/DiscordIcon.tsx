
import React from 'react';

const DiscordIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20.222 0H3.778C2.796 0 2 .796 2 1.778v16.444C2 19.204 2.796 20 3.778 20H18l4 4V1.778C22 .796 21.204 0 20.222 0zM8.444 13.333C7.536 13.333 6.778 12.574 6.778 11.667s.758-1.666 1.666-1.666c.908 0 1.666.758 1.666 1.666s-.758 1.666-1.666 1.666zm7.112 0c-.908 0-1.666-.758-1.666-1.666s.758-1.666 1.666-1.666c.908 0 1.666.758 1.666 1.666s-.758 1.666-1.666 1.666z"/>
  </svg>
);

export default DiscordIcon;
