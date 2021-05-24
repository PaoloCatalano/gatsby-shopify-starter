import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const ProductsTileWrapper = styled.div`
  border: 1px solid #ddd;
  display: flex;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;
  flex-direction: column;

  > ${StyledLink} {
    border: 1px solid black;
    text-decoration: none;
    display: block;
    padding: 5px;
    text-align: center;
    font-weight: bold;
    color: black;
  }
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
`;
export const Description = styled.div`
  padding: 0 20px 10px 20px;
  color: #999;
  text-align: left;
`;
export const Price = styled.div`
  font-style: italic;
  padding: 20px;
  font-weight: bold;
  margin-top: auto;
`;
