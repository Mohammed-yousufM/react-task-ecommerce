import React, { useRef, useEffect, useState } from 'react';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';

function CustomToast({ status, text }) {
  const timerId = useRef();
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    if (showToast) {
      timerId.current = setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timerId.current);
    };
  }, [showToast]);

  return (
    <ToastContainer position="top-center">
      <Toast bg={status} show={showToast} animation={true}>
        <Toast.Body>{text}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default CustomToast;
