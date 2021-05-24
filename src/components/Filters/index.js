import React from 'react';
import ProductContext from 'context/ProductContext';
import { CategoryFilterItem } from './CategoryFilterItem';
import { FiltersWrapper } from './styles';

export const Filters = () => {
  const { collections } = React.useContext(ProductContext);
  return (
    <FiltersWrapper>
      <strong>Categpries</strong>
      {collections.map(coll => (
        <CategoryFilterItem
          title={coll.title}
          key={coll.shopifyId}
          id={coll.shopifyId}
        />
      ))}
    </FiltersWrapper>
  );
};
