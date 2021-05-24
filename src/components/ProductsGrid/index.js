import React from 'react';
import { ProductsGridWrapper } from './styles';
import { ProductTile } from '../ProductTile';
export function ProductsGrid({ products }) {
  return (
    <ProductsGridWrapper>
      {products.map(prod => (
        <ProductTile
          handle={prod.handle}
          description={prod.description}
          key={prod.shopifyId}
          image={prod.images[0].localFile.childImageSharp}
          title={prod.title}
          price={prod.priceRange.minVariantPrice.amount}
        />
      ))}
    </ProductsGridWrapper>
  );
}
