import React from 'react';
import Button from 'react-bootstrap/Button';

function CustomButton({ isLoading, btnTxt, handleClick, variant = 'primary' }) {
  return (
    <Button
      variant={variant}
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
      size="sm"
    >
      {isLoading ? 'Loading…' : btnTxt}
    </Button>
  );
}

export default CustomButton;
