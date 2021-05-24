import styled from 'styled-components';

export const ImageThumbnailWrapper = styled.div`
  cursor: pointer;
  border: 4px solid ${({ isActive }) => (isActive ? 'blue' : '#eee')};
`;
