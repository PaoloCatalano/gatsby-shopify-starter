import styled from 'styled-components';

export const CartHeader = styled.header`
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr 40px;
  font-weight: bold;
  > div {
    padding: 8px;
  }
`;
export const CartFooter = styled.footer`
  border-top: 1px solid black;
  display: grid;
  margin-bottom: 3rem;
  grid-template-columns: 6fr 1fr 40px;
  > div {
    padding: 8px;
  }
`;

export const CartItem = styled.div`
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr 40px;

  > div {
    padding: 8px;

    &:first-child {
      > div:first-child {
        font-weight: bold;
      }
      > div:last-child {
        color: #999;
        margin-top: 4px;
        font-size: 14px;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;

  > div:last-child {
    text-align: right;
  }
`;
