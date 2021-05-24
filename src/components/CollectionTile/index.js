import React from 'react';
import {
  CollectionTileWrapper,
  CollectionTileContent,
  Title,
  Description,
} from './styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { StyledLink } from '../StyledLink';

export function CollectionTile({
  description,
  title,
  backgroundImage,
  sale,
  destination,
}) {
  return (
    <CollectionTileWrapper>
      <GatsbyImage image={getImage(backgroundImage)} alt={title} />
      <CollectionTileContent>
        <div>
          <Title sale={sale}>{title}</Title>
          <Description sale={sale}>{description}</Description>
          <StyledLink to={destination}>Shop Now</StyledLink>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
}
