import React from 'react';
import { ImageThumbnailWrapper } from './styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export function ImageThumbnail({ isActive, onClick, image, title }) {
  const handleClick = () => {
    onClick(image);
  };

  return (
    <ImageThumbnailWrapper onClick={handleClick} isActive={isActive}>
      <GatsbyImage
        image={getImage(image.localFile.childImageSharp)}
        alt={`${title}-${image.id}`}
      />
    </ImageThumbnailWrapper>
  );
}
