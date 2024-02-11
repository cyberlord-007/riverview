import React from 'react';
import { StyledBtn } from './ButtonStyles';

const Button = ({ key, clickFn, primary, label, hover }) => {
  return (
    <StyledBtn
      key={key}
      onClick={() => clickFn()}
      shouldHover={hover}
      primary={primary}
    >
      {label}
    </StyledBtn>
  );
};

export default Button;
