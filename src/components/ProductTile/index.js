import React from 'react';
import { ProductsTileWrapper, Title, Description, Price } from './styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { StyledLink } from '../StyledLink';

export function ProductTile({ title, image, description, price, handle }) {
  return (
    <ProductsTileWrapper>
      <GatsbyImage image={getImage(image)} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>from € {parseFloat(price).toFixed(2)}</Price>
      <StyledLink to={`/products/${handle}`}>View product</StyledLink>
    </ProductsTileWrapper>
  );
}
