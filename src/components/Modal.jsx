// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../styles/Modal.css';

const Modal = ({ onClose, monthlyPayment, calculationSummary }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Monthly Payment ${monthlyPayment}</h2>

        {/* Calculation Summary */}
        <h3>Calculation Summary</h3>
        <table>
        <thead>
            <tr>
              <th>Category</th>
              <th>Term</th>
              <th>Amortization</th>
            </tr>
          </thead>
          <tbody>
            {calculationSummary.map((item) => (
              <tr key={item.category}>
                <td>{item.category}</td>
                <td>{item.term}</td>
                <td>{item.amortizationPeriod}</td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  monthlyPayment: PropTypes.number.isRequired,
  calculationSummary: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Modal;
