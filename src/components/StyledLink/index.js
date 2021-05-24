import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

const Link = ({ to, className, children }) => {
  return (
    <GatsbyLink to={to} className={className} suppressHydrationWarning>
      {children}
    </GatsbyLink>
  );
};

export const StyledLink = styled(Link)``;
