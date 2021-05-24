import React from 'react';
import { CollectionTile } from '../CollectionTile';
import { RemainingCollection } from './styles';

export function HomepageCollectionGrid({ collections }) {
  const saleCollection = collections.find(coll => coll.title === 'SALE');
  const remainingCollection = collections.filter(coll => coll.title !== 'SALE');
  return (
    <div>
      {!!saleCollection && (
        <CollectionTile
          sale
          destination={`all-products?c=${encodeURIComponent(
            saleCollection.shopifyId
          )}`}
          title={saleCollection.title}
          description={saleCollection.description}
          backgroundImage={saleCollection.image.localFile.childImageSharp}
        />
      )}
      <RemainingCollection>
        {remainingCollection.map(coll => (
          <CollectionTile
            destination={`all-products?c=${encodeURIComponent(coll.shopifyId)}`}
            title={coll.title}
            description={coll.description}
            backgroundImage={coll.image.localFile.childImageSharp}
            key={coll.shopifyId}
          />
        ))}
      </RemainingCollection>
    </div>
  );
}
