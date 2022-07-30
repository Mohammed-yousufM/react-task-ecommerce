import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function CustomInput({
  type,
  label,
  name,
  placeholder,
  value,
  handleChange,
  error,
  okay = '',
}) {
  return (
    <Form.Group as={Col} md="4" controlId={label}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        required
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <Form.Control.Feedback type={error ? 'invalid' : null}>
        {error}
      </Form.Control.Feedback>
      <Form.Control.Feedback type={okay ? 'valid' : null}>
        {okay}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default CustomInput;
