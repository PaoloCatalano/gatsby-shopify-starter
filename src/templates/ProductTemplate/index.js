/* eslint-disable jsx-a11y/no-onchange  */
import React, { useState } from 'react';
import CartContext from 'context/CartContext';
import { graphql } from 'gatsby';
import {
  Layout,
  ImageGallery,
  ProductQuantityAdder,
  Button,
  Seo,
} from 'components';
import { Grid, SelectWrapper, Price } from './styles';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export default function ProductTemplate({
  data: {
    shopifyProduct: { title, description, images, shopifyId },
  },
}) {
  const { getProductById } = React.useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { search, origin, pathname } = useLocation();
  const variantId = queryString.parse(search).variant;

  React.useEffect(() => {
    getProductById(shopifyId).then(res => {
      setProduct(res);
      //default value
      setSelectedVariant(
        res.variants.find(({ id }) => id === variantId) || res.variants[0]
      );
    });
  }, [getProductById, shopifyId, setProduct, variantId]);

  const handleVariantChange = e => {
    const newVariant = product?.variants.find(v => v.id === e.target.value);
    setSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      {
        replace: true,
      }
    );
  };

  return (
    <Layout>
      <Seo description={description} title={title} />
      <Button onClick={() => navigate(-1)}>Back to products</Button>
      <Grid>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          {product?.availableForSale && !!selectedVariant && (
            <>
              {product?.variants.length > 1 && (
                <SelectWrapper>
                  <strong>Variants</strong>
                  <select
                    value={selectedVariant.id}
                    onChange={handleVariantChange}
                    // onBlur={handleVariantChange} cosi oppure si ignora il warning con un commento
                  >
                    {/* async, per questo si mettono i ? */}
                    {product?.variants.map(v => (
                      <option value={v.id} key={v.id}>
                        {v.title}
                      </option>
                    ))}
                  </select>
                </SelectWrapper>
              )}
              {/* !! convert any variable to a true or false value  */}
              {!!selectedVariant && (
                <>
                  <Price>€ {selectedVariant?.price}</Price>
                  <ProductQuantityAdder
                    available={selectedVariant.available}
                    variantId={selectedVariant.id}
                  />
                </>
              )}
            </>
          )}
        </div>
        <div>
          <ImageGallery
            selectedVariantImageId={selectedVariant?.image.id}
            images={images}
            title={title}
          />
        </div>
      </Grid>
    </Layout>
  );
}

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      ...ShopifyProductFields
    }
  }
`;
