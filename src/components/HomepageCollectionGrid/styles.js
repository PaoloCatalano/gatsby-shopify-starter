import styled from 'styled-components';

export const RemainingCollection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > div {
    flex-grow: 1;
    width: 30%; /* ????????????? */
    min-width: 100%;

    @media (min-width: 768px) {
      min-width: 50%;
      /* width: var(--mini); */
    }
    @media (min-width: 1024px) {
      min-width: 33%;
    }
  }
`;
