// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../styles/Modal.css';

const Modal = ({ onClose, monthlyPayment, userInputs, calculationSummary }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Monthly Payment </h2>
        <h1>${monthlyPayment}</h1>

         {/* User Inputs
         <h3>User Inputs</h3>
        <table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(userInputs).map(([param, value]) => (
              <tr key={param}>
                <td>{param}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table> */}

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
  // monthlyPayment: PropTypes.number.isRequired,
  monthlyPayment: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  userInputs: PropTypes.object.isRequired,
  calculationSummary: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Modal;
