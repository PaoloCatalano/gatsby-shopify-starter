import React from 'react';
import { Layout, Filters, ProductsGrid, Seo } from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;
`;

export default function AllProducts() {
  const { products, collections } = React.useContext(ProductContext);
  const collectionProductMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const searchTerm = qs.s;
  const selectedCollectionIdsMap = {};

  selectedCollectionIds.forEach(collId => {
    selectedCollectionIdsMap[collId] = true;
  });

  if (collections) {
    collections.forEach(coll => {
      collectionProductMap[coll.shopifyId] = {};

      coll.products.forEach(prod => {
        collectionProductMap[coll.shopifyId][prod.shopifyId] = true;

        /*  object[a][b] = true 
                UGUALE A
            {
              "a": {"b": true}
            } 
        */
      });
    });
  }

  const filterByCategory = prod => {
    if (Object.keys(selectedCollectionIdsMap).length) {
      for (let key in selectedCollectionIdsMap) {
        if (collectionProductMap[key]?.[prod.shopifyId]) {
          return true;
        }
      }
      return false;
    }
    return true; //fa in modo che l'array dei prodotti non va a ridursi
  };
  const filterBySearchTerm = product => {
    if (searchTerm) {
      return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    }
    return true;
  };

  const filteredProducts = products
    .filter(filterByCategory)
    .filter(filterBySearchTerm);

  return (
    <Layout>
      <Seo description="All the products" title="All Products" />

      {!!searchTerm && !!filteredProducts.length && (
        <h3>
          Search term: <strong>'{searchTerm}'</strong>
        </h3>
      )}
      {!!filteredProducts.length && (
        <h4 style={{ display: 'inline-block' }}>
          {filteredProducts.length} products
        </h4>
      )}
      <Content>
        <Filters />
        {!filteredProducts.length && (
          <div>
            <h3>
              No match with <strong>'{searchTerm}'</strong>
            </h3>
            <hr />
            <div style={{ marginLeft: '1rem' }}>
              To help with your search why not try:
              <br />
              <br />
              <ol style={{ listStyleType: 'katakana' }}>
                <li>Checking your spelling</li>
                <li>Using less words</li>
                <li>Try using a different search word</li>
              </ol>
              <hr />
              <ol style={{ listStyleType: 'katakana-iroha' }}>
                <li>Checking your spelling</li>
                <li>Using less words</li>
                <li>Try using a different search word</li>
              </ol>
            </div>
          </div>
        )}
        {!!filteredProducts.length && (
          <div>
            <ProductsGrid products={filteredProducts} />
          </div>
        )}
      </Content>
    </Layout>
  );
}
/*   <div>
        {collections.map(coll => (
          <div key={coll.shopifyId}>{coll.title}</div>
        ))}
      </div> */
