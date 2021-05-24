import React from 'react';
import { CheckboxWrapper } from './styles';
import { FaCheck } from 'react-icons/fa';

export const Checkbox = ({ checked }) => {
  return (
    <CheckboxWrapper checked={checked} suppressHydrationWarning>
      <div>
        <FaCheck style={{ color: 'white' }} />
      </div>
    </CheckboxWrapper>
  );
};
