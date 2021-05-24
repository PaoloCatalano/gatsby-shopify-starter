import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  background: ${props => (props.checked ? 'black' : 'none')};
  font-size: 0.1em;
  transition: all 0.2s ease-out;

  > div svg {
    min-width: 20px;
    font-size: 0.8rem;
    color: white;
  }

  > div {
    line-height: 1;
    margin: auto;
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;
