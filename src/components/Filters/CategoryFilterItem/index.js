import React from 'react';
import { Checkbox } from 'components';
import { CategoryFiltersWrapper } from './styles';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export const CategoryFilterItem = ({ title, id }) => {
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const collectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const checked = collectionIds?.find(cId => cId === id);
  const searchTerm = qs.s;

  const onClick = () => {
    let navTo = '/all-products';
    let newIds = [];

    if (checked) {
      newIds = collectionIds
        .filter(cId => cId !== id)
        .map(cId => encodeURIComponent(cId));
    } else {
      collectionIds.push(id);
      newIds = collectionIds.map(cId => encodeURIComponent(cId));
    }

    if (newIds.length && !searchTerm) {
      navigate(`${navTo}?c=${newIds.join(',')}`);
    } else if (newIds.length && !!searchTerm) {
      navigate(
        `${navTo}?s=${encodeURIComponent(searchTerm)}&c=${newIds.join(',')}`
      );
    } else if (!!searchTerm && !newIds.length) {
      navigate(`${navTo}?s=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate(`${navTo}`);
    }
  };

  return (
    <CategoryFiltersWrapper onClick={onClick}>
      <Checkbox checked={checked} />
      <div>
        <div style={{ position: 'relative' }}>
          <span
            style={{
              position: 'absolute',
              color: 'white',
              background: 'lightgreen',
              zIndex: '-1',
            }}
          >
            {checked ? `${title}` : ''}
          </span>
          {title}
        </div>
      </div>
    </CategoryFiltersWrapper>
  );
};
