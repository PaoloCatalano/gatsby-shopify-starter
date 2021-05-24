import styled, { css } from 'styled-components';

const fullwidthStyles = ({ fullwidth }) => {
  if (fullwidth) {
    return css`
      display: block;
      width: 100%;
    `;
  }
};

export const Button = styled.button`
  content: 'Add';
  outline: none;
  padding: 0 10px;
  height: 44px;
  line-height: 44px;
  box-shadow: none;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  background-color: white;
  color: black;
  border: 1px solid black;
  white-space: nowrap;
  ${fullwidthStyles}

  &:hover:not(:disabled) {
    color: white;
    background-color: black;
    border: 1px solid rgba(0, 0, 0, 0);
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
    color: #fff;
  }
`;
