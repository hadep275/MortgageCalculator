// AdvancedCalculator.js
import React, { useState } from 'react';

const AdvancedCalculator = ({ onCalculate }) => {
  const [province, setProvince] = useState('');
  const [paymentFrequency, setPaymentFrequency] = useState('monthly');
  const [lumpSumPayment, setLumpSumPayment] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [mortgageInsurance, setMortgageInsurance] = useState('');
  const [city, setCity] = useState('');
  const [landTransferTax, setLandTransferTax] = useState('');
  const [lawyerFees, setLawyerFees] = useState('');
  const [titleInsurance, setTitleInsurance] = useState('');
  const [homeInspectionFees, setHomeInspectionFees] = useState('');
  const [appraisalFees, setAppraisalFees] = useState('');
  const [utilities, setUtilities] = useState('');
  const [condoFees, setCondoFees] = useState('');
  const [homeInsurance, setHomeInsurance] = useState('');
  const [paydownOptions, setPaydownOptions] = useState('');

  const handleCalculate = () => {
    const [lumpSumPaymentValue, setLumpSumPaymentValue] = useState(0);
const [downPaymentValue, setDownPaymentValue] = useState(0);
const [mortgageInsuranceValue, setMortgageInsuranceValue] = useState(0);
const [landTransferTaxValue, setLandTransferTaxValue] = useState(0);
const [lawyerFeesValue, setLawyerFeesValue] = useState(0);
const [titleInsuranceValue, setTitleInsuranceValue] = useState(0);
const [homeInspectionFeesValue, setHomeInspectionFeesValue] = useState(0);
const [appraisalFeesValue, setAppraisalFeesValue] = useState(0);
const [utilitiesValue, setUtilitiesValue] = useState(0);
const [condoFeesValue, setCondoFeesValue] = useState(0);
const [homeInsuranceValue, setHomeInsuranceValue] = useState(0);
const [paydownOptionsValue, setPaydownOptionsValue] = useState(0);

  const totalCost =
  lumpSumPaymentValue +
  downPaymentValue +
  mortgageInsuranceValue +
  landTransferTaxValue +
  lawyerFeesValue +
  titleInsuranceValue +
  homeInspectionFeesValue +
  appraisalFeesValue +
  utilitiesValue +
  condoFeesValue +
  homeInsuranceValue +
  // Add more cost values here for other expenses
  paydownOptionsValue;

// You can then use the totalCost variable as needed, for example, log it to the console:
console.log('Total Cost:', totalCost);


    if (typeof onCalculate === 'function') {
      onCalculate({
        province,
        paymentFrequency,
        lumpSumPayment,
        downPayment,
        mortgageInsurance,
        city,
        landTransferTax,
        lawyerFees,
        titleInsurance,
        homeInspectionFees,
        appraisalFees,
        utilities,
        condoFees,
        homeInsurance,
        paydownOptions,
        totalCost,
        // Add more calculated values as needed
      });
    }
  };

  return (
    <div>
      {/* Add input fields and UI for the advanced features */}
      <div className="input-group">
        <label>Province</label>
        <input
          type="text"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Payment Frequency</label>
        <select
          value={paymentFrequency}
          onChange={(e) => setPaymentFrequency(e.target.value)}
        >
          <option value="monthly">Monthly</option>
          <option value="bi-weekly">Bi-Weekly</option>
          {/* Add more options based on your requirements */}
        </select>
      </div>
      <div className="input-group">
        <label>Lump Sum Payment ($)</label>
        <input
          type="number"
          value={lumpSumPayment}
          onChange={(e) => setLumpSumPaymentValue(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Down Payment ($)</label>
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPaymentValue(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Mortgage Insurance ($)</label>
        <input
          type="number"
          value={mortgageInsurance}
          onChange={(e) => setMortgageInsuranceValue(e.target.value)}
        />
      </div>
      {/* Add more input fields for other advanced features */}
      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
};

export default AdvancedCalculator;
