import React from 'react';
import Button from 'react-bootstrap/Button';

function CustomButton({ isLoading, btnTxt, handleClick }) {
  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : btnTxt}
    </Button>
  );
}

export default CustomButton;
