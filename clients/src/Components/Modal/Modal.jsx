// src/Modal.js
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 0.5s ease;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  text-align: center;
  position: relative;
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(-50px)')};
  opacity: ${props => (props.show ? 1 : 0)};
  transition: all 0.5s ease;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  input {
    margin-right: 0.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Modal = ({ onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Delay setting the show state to allow for the mount animation
    const timer = setTimeout(() => setShow(true), 10);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 500); // Delay unmounting to allow for the transition to complete
  };

  return (
    <ModalOverlay show={show}>
      <ModalContainer show={show}>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <h2>Get the best blog stories into your inbox!</h2>
        <Input type="email" placeholder="Enter Your Email" />
        <Button>Subscribe</Button>
        <CheckboxContainer>
          <input type="checkbox" id="data-consent" />
          <label htmlFor="data-consent">I agree that my submitted data is being collected and stored.</label>
        </CheckboxContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
