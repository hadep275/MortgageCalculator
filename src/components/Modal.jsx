// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Modal.css';

const Modal = ({ onClose, monthlyPayment }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Monthly Payment</h2>
        <p>${monthlyPayment}</p>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
