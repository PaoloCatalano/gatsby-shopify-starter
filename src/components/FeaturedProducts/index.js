import React from 'react';
import { ProductsGrid } from '../ProductsGrid';
import ProductContext from 'context/ProductContext';
export function FeaturedProducts() {
  const { collections } = React.useContext(ProductContext);
  const featuredCollection = collections.find(
    coll => coll.title === 'Featured'
  );

  return (
    <section>
      <h1>Featured Hats</h1>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
}
