// AdvancedCalculator.js
import React, { useState } from 'react';
import { provincesAndCitiesData } from './ProvinceAndCities';

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
  const [totalCost, setTotalCost] = useState(null);

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    // Reset city when province changes
    setCity('');
  };


  const handleCalculate = () => {
    const lumpSumPaymentValue = parseFloat(lumpSumPayment) || 0;
    const downPaymentValue = parseFloat(downPayment) || 0;
    const mortgageInsuranceValue = parseFloat(mortgageInsurance) || 0;
    const landTransferTaxValue = parseFloat(landTransferTax) || 0;
    const lawyerFeesValue = parseFloat(lawyerFees) || 0;
    const titleInsuranceValue = parseFloat(titleInsurance) || 0;
    const homeInspectionFeesValue = parseFloat(homeInspectionFees) || 0;
    const appraisalFeesValue = parseFloat(appraisalFees) || 0;
    const utilitiesValue = parseFloat(utilities) || 0;
    const condoFeesValue = parseFloat(condoFees) || 0;
    const homeInsuranceValue = parseFloat(homeInsurance) || 0;
    const paydownOptionsValue = parseFloat(paydownOptions) || 0;

    const calculatedTotalCost =
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
      paydownOptionsValue;

      setTotalCost(calculatedTotalCost);
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
        totalCost: calculatedTotalCost,
      });
    }
  };

  return (
    <div>
      {/* Add input fields and UI for the advanced features */}
      <br></br>
      <br></br>
      <div className="input-group">
        <label>Province</label>
        <select
          value={province}
          onChange={handleProvinceChange}
        >
          <option value="">Select Province</option>
          {provincesAndCitiesData.provinces.map((prov) => (
            <option key={prov} value={prov}>
              {prov}
            </option>
          ))}
        </select>
      </div>
      {province && (
      <div className="input-group">
        <label>City</label>
        <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select City</option>
            {provincesAndCitiesData.cities[province].map((cty) => (
              <option key={cty} value={cty}>
                {cty}
              </option>
            ))}
          </select>
      </div>
      )}
      <div className="input-group">
        <label>Payment Frequency</label>
        <select
          value={paymentFrequency}
          onChange={(e) => setPaymentFrequency(e.target.value)}
        >
          <option value="monthly">Monthly</option>
          <option value="bi-weekly">Bi-Weekly</option>
          <option value="bi-weekly">Weekly</option>
          {/* Add more options based on your requirements */}
        </select>
      </div>
      <div className="input-group">
        <label>Lump Sum Payment ($)</label>
        <input
          type="number"
          value={lumpSumPayment}
          onChange={(e) => setLumpSumPayment(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Down Payment ($)</label>
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Mortgage Insurance ($)</label>
        <input
          type="number"
          value={mortgageInsurance}
          onChange={(e) => setMortgageInsurance(e.target.value)}
        />
      </div>

<div className="input-group">
  <label>Land Transfer Tax ($)</label>
  <input
    type="number"
    value={landTransferTax}
    onChange={(e) => setLandTransferTax(e.target.value)}
  />
</div>
<div className="input-group">
  <label>Lawyer Fees ($)</label>
  <input
    type="number"
    value={lawyerFees}
    onChange={(e) => setLawyerFees(e.target.value)}
  />
</div>
<div className="input-group">
  <label>Title Insurance ($)</label>
  <input
    type="number"
    value={titleInsurance}
    onChange={(e) => setTitleInsurance(e.target.value)}
  />
</div>
<div className="input-group">
  <label>Home Inspection Fees ($)</label>
  <input
    type="number"
    value={homeInspectionFees}
    onChange={(e) => setHomeInspectionFees(e.target.value)}
  />
</div>
<div className="input-group">
  <label>Appraisal Fees ($)</label>
  <input
    type="number"
    value={appraisalFees}
    onChange={(e) => setAppraisalFees(e.target.value)}
  />
</div>
<div className="input-group">
  <label>Utilities ($)</label>
  <input
    type="number"
    value={utilities}
    onChange={(e) => setUtilities(e.target.value)}
  />
</div>
<div className="input-group">
  <label>Condo Fees ($)</label>
  <input
    type="number"
    value={condoFees}
    onChange={(e) => setCondoFees(e.target.value)}
  />
</div>
<div className="input-group">
  <label>Home Insurance ($)</label>
  <input
    type="number"
    value={homeInsurance}
    onChange={(e) => setHomeInsurance(e.target.value)}
  />
</div>
<div className="input-group">
  <label>Paydown Options ($)</label>
  <input
    type="number"
    value={paydownOptions}
    onChange={(e) => setPaydownOptions(e.target.value)}
  />
</div>

      <button onClick={handleCalculate}>Calculate</button>

      {totalCost !== null && (
        <div className="input-group">
          <label>Total Cost</label>
          <span>{totalCost}</span>
        </div>
      )}

    </div>
  );
};

export default AdvancedCalculator;
