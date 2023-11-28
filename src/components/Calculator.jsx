import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import AdvancedCalculator from './AdvancedCalculator';
import Modal from './Modal';
import '../styles/Calculator.css';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTermYears, setLoanTermYears] = useState('30');
  const [loanTermMonths, setLoanTermMonths] = useState('0');
  const [interestRate, setInterestRate] = useState('');
  const [propertyTaxes, setPropertyTaxes] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [calculationSummary, setCalculationSummary] = useState([]);
  const [userInputs, setUserInputs] = useState({});

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const monthlyRate = (parseFloat(interestRate) / 100) / 12;
    const totalMonths = parseInt(loanTermYears, 10) * 12 + parseInt(loanTermMonths, 10);
    const taxes = parseFloat(propertyTaxes);


    const monthlyPaymentResult =
      ((principal + taxes) * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -totalMonths));

  const termMonths = 5 * 12;
  const principalPayments = [];
  const interestPayments = [];
  const amortizationMonths = parseInt(loanTermYears, 10) * 12 + parseInt(loanTermMonths, 10);

  const calculatePayments = (months) => {
    const principalPayments = [];
    const interestPayments = [];
    
    let remainingBalance = principal;
    let totalPrincipalAccumulator = 0;

    for (let i = 1; i <= months; i++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyPaymentResult - interestPayment;
      remainingBalance -= principalPayment;

      principalPayments.push(principalPayment);
      interestPayments.push(interestPayment);
      totalPrincipalAccumulator += principalPayment;
    }

  const totalPrincipal = principalPayments.reduce((acc, val) => acc + val, 0);
  const totalInterest = interestPayments.reduce((acc, val) => acc + val, 0);
  const totalPayment = totalPrincipal + totalInterest;

  return {
    totalPrincipal: totalPrincipalAccumulator, 
    totalInterest,
    totalPayment: totalPrincipalAccumulator + totalInterest,
  };
};

const termPayments = calculatePayments(termMonths);
const amortizationPayments = calculatePayments(amortizationMonths);

  const currentUserInputs = {
    'Loan Amount': loanAmount,
    'Interest Rate': interestRate,
    'Loan Term': `${loanTermYears} Years ${loanTermMonths} Months`,
    'Property Taxes': propertyTaxes,
  };

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  const additionalCalculationSummary = [
    { category: 'Number of Payments', term: termMonths.toString(), amortizationPeriod: amortizationMonths.toString() },
    { category: 'Mortgage Payment', term: `$${formatNumberWithCommas(monthlyPaymentResult.toFixed(2))}`, amortizationPeriod: `$${formatNumberWithCommas(monthlyPaymentResult.toFixed(2))}` },
    { category: 'Prepayment', term: '$0.00', amortizationPeriod: '$0.00' },
    { category: 'Principal Payments', term: `$${formatNumberWithCommas(termPayments.totalPrincipal.toFixed(2))}`, amortizationPeriod: `$${formatNumberWithCommas(amortizationPayments.totalPrincipal.toFixed(2))}` },
    { category: 'Interest Payments', term: `$${formatNumberWithCommas(termPayments.totalInterest.toFixed(2))}`, amortizationPeriod: `$${formatNumberWithCommas(amortizationPayments.totalInterest.toFixed(2))}` },
    { category: 'Total Cost', term: `$${formatNumberWithCommas(termPayments.totalPayment.toFixed(2))}`, amortizationPeriod: `$${formatNumberWithCommas(amortizationPayments.totalPayment.toFixed(2))}` },
  ];

  setCalculationSummary(additionalCalculationSummary);


    setMonthlyPayment(monthlyPaymentResult.toFixed(2));
    setUserInputs(currentUserInputs);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
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
    <label>Loan Term</label>
  <div className="loan-term-inputs">
   <select 
            value={loanTermYears}
            onChange={(e) => setLoanTermYears(e.target.value)}
          >
            {[...Array(51).keys()].map((year) => (
              <option key={year} value={year.toString()}>
                {year} {year === 1 ? 'Year' : 'Years'}
              </option>
            ))}
          </select>
          <select
            value={loanTermMonths}
            onChange={(e) => setLoanTermMonths(e.target.value)}
          >
            {[...Array(13).keys()].map((month) => (
              <option key={month} value={month.toString()}>
                {month} {month === 1 ? 'Month' : 'Months'}
              </option>
             ))}
          </select>
  </div>
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
        {/* <h3>Monthly Payment</h3>
        <span>${monthlyPayment}</span> */}
      </div>
    )}

{showAdvanced && <AdvancedCalculator monthlyPayment={monthlyPayment} />}
{showModal && ( <Modal onClose={closeModal} monthlyPayment={monthlyPayment} userInputs={userInputs} calculationSummary={calculationSummary} />)}

  </div>
);
};

export default Calculator

