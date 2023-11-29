# Mortgage Calculator

[Mortgage Calculator Demo](https://hadep275.github.io/MortgageCalculator/) 


![screencapture-localhost-5173-MortgageCalculator-2023-11-17-15_03_34](https://github.com/hadep275/MortgageCalculator/assets/65734173/087cc87e-60c5-465a-9a45-dc48b8bc8601)

## Overview

This React project implements a Mortgage Calculator web application. Users can input loan details, such as loan amount, interest rate, loan term, and property taxes, to calculate their monthly mortgage payment. The application also provides an advanced calculator with additional features, including options for lump-sum payments, down payments, and various fees associated with home buying.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [File Structure](#file-structure)
- [Styles](#styles)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/mortgage-calculator.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd mortgage-calculator
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000) in your web browser.

## Usage

1. Input the required details, such as loan amount, interest rate, loan term, and property taxes.
2. Click the "Calculate" button to get the monthly mortgage payment.
3. Optionally, click the "Advanced" button to access additional features like lump-sum payments, down payments, and various fees.
4. The detailed calculation summary, including amortization details, will be displayed in a modal.

## Features

- **Basic Calculator:**
  - Calculate monthly mortgage payments based on user input.
- **Advanced Calculator:**
  - Additional features for lump-sum payments, down payments, and various fees.
  - Options for different payment frequencies (monthly, bi-weekly, weekly).
  - Detailed calculation summary and total cost estimation.

## File Structure

- `src/`
  - `components/`: React components
    - `Calculator.js`: Main calculator component
    - `AdvancedCalculator.js`: Advanced calculator component
    - `Modal.js`: Modal component for displaying calculation summary
    - `Header.js`: Header component (not currently used)
  - `styles/`: CSS stylesheets
    - `Calculator.css`: Styles for the main calculator
    - `Modal.css`: Styles for the modal
    - `Header.css`: Styles for the header (not currently used)
  - `App.js`: Main application component
  - `index.js`: Entry point of the application

## Styles

The project uses CSS for styling, and stylesheets are organized under the `src/styles/` directory.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```
