import React, { useState } from 'react';
import { BalanceCalculator } from './BalanceCalculator';
import { Calculator } from './components/Calculator';

export function Options() {
    const [showBalanceCalculator, setShowBalanceCalculator] = useState(false);
    const [showSpecialCalculator, setshowSpecialCalculator] = useState(false);

    // Function to toggle the visibility of the balance calculator
    const toggleBalanceCalculator = () => {
        console.log("Balance Calculator clicked")
        setShowBalanceCalculator(!showBalanceCalculator);
        setshowSpecialCalculator(false);

    };

    const toggleSpecialCalculator = () => {
        console.log("Special Calculator Clicked")
        setshowSpecialCalculator(!showSpecialCalculator);
        setShowBalanceCalculator(false);

    };
    return (
        <div className="container">
            {/* Button to toggle the visibility of the balance calculator */}
            <center><h1>OPTIONS</h1></center>
            {!showBalanceCalculator  && <button className='btn' onClick={toggleBalanceCalculator}>Open Balance Calculator</button>}
            {!showSpecialCalculator  && <button className='btn' onClick={toggleSpecialCalculator}>Special Calculator</button>}
            {/* Conditionally render the balance calculator based on state */}
            {showBalanceCalculator && <BalanceCalculator />}
            {showSpecialCalculator && <Calculator />}
        </div>
    );
}
