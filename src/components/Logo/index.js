import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const Logo = () => {
  return (
    <div>
      <StaticImage src="../../images/MadHatter.png" alt="logo" width={60} />
    </div>
  );
};
