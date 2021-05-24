import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ImageGalleryWrapper } from './styles';
import { ImageThumbnail } from './ImageThumbnail';

export function ImageGallery({ selectedVariantImageId, images, title }) {
  const [activeImageThumbnail, setActiveImageThumbnail] = React.useState(
    images.find(({ id }) => id === selectedVariantImageId) || images[0]
  );

  React.useEffect(() => {
    setActiveImageThumbnail(
      images.find(({ id }) => id === selectedVariantImageId) || images[0]
    );
  }, [selectedVariantImageId, images, setActiveImageThumbnail]);

  const handleClick = image => {
    setActiveImageThumbnail(image);
  };
  return (
    <ImageGalleryWrapper>
      <div>
        <GatsbyImage
          image={getImage(activeImageThumbnail.localFile.childImageSharp)}
          alt={title}
        />
      </div>
      <div>
        {images.map(image => {
          return (
            <ImageThumbnail
              key={image.id}
              onClick={handleClick}
              image={image}
              title={title}
              isActive={activeImageThumbnail.id === image.id}
            />
          );
        })}
      </div>
    </ImageGalleryWrapper>
  );
}
