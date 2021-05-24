import React from 'react';
import { Layout, CartContents, Seo } from 'components';

export default function CartPage() {
  return (
    <Layout>
      <Seo description="the Cart page" title="Cart" />
      <CartContents />
    </Layout>
  );
}
