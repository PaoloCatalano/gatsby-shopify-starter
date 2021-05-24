import React from 'react';
import { LayoutWrapper } from './styles';
import { Header } from '../Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header suppressHydrationWarning />
      <LayoutWrapper>
        <main suppressHydrationWarning>{children}</main>
      </LayoutWrapper>
    </>
  );
};

export { Layout };
