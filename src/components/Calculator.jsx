import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import AdvancedCalculator from './AdvancedCalculator';
import '../styles/Calculator.css';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [propertyTaxes, setPropertyTaxes] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const monthlyRate = (parseFloat(interestRate) / 100) / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;
    const taxes = parseFloat(propertyTaxes);


    const monthlyPaymentResult =
      ((principal + taxes) * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    setMonthlyPayment(monthlyPaymentResult.toFixed(2));
  };

  return (
    <div className="calculator">
    <h2><FontAwesomeIcon icon={faHome} bounce size="sm" className='bounce'/> Mortgage Calculator</h2>
    <div className="input-group">
      <label>Loan Amount ($)</label>
      <input
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
      />
    </div>
    <div className="input-group">
      <label>Interest Rate (%)</label>
      <input
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />
    </div>
    <div className="input-group">
      <label>Loan Term (Years)</label>
      <input
        type="number"
        value={loanTerm}
        onChange={(e) => setLoanTerm(e.target.value)}
      />
    </div>
    <div className="input-group">
        <label>Property Taxes ($)</label>
        <input
          type="number"
          value={propertyTaxes}
          onChange={(e) => setPropertyTaxes(e.target.value)}
        />
      </div>
    <button onClick={calculateMortgage}>Calculate </button><button className="advanced-button" onClick={() => setShowAdvanced(!showAdvanced)}>
        {showAdvanced ? <FontAwesomeIcon icon={faMinus} />: <FontAwesomeIcon icon={faPlus} />}
      </button>
    {monthlyPayment !== null && (
      <div className="results">
        <h3>Monthly Payment</h3>
        <span>${monthlyPayment}</span>
      </div>
    )}

    {/* <button className="advanced-button" onClick={() => setShowAdvanced(!showAdvanced)}>
        {showAdvanced ? <FontAwesomeIcon icon={faMinus} />: <FontAwesomeIcon icon={faPlus} />}
      </button> */}
      {showAdvanced && <AdvancedCalculator />}

  </div>
);
};

export default Calculator

