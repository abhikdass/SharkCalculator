import React, { useState } from 'react';
import { BalanceCalculator } from './BalanceCalculator';
import { Calculator } from './components/Calculator';

export function Options() {
    const [activeView, setActiveView] = useState('home');

    const goHome = () => setActiveView('home');

    if (activeView !== 'home') {
        return (
            <div className="container">
                <button className="back-btn" onClick={goHome}>← Back</button>
                {activeView === 'balance' && <BalanceCalculator />}
                {activeView === 'shark' && <Calculator />}
            </div>
        );
    }

    return (
        <div className="container home-container">
            <h1 className="home-title">🦈 Shark Calculator</h1>
            <p className="home-subtitle">Choose a calculator to get started</p>
            <div className="option-cards">
                <button className="option-card" onClick={() => setActiveView('balance')}>
                    <span className="option-icon">💰</span>
                    <span className="option-label">Balance Calculator</span>
                </button>
                <button className="option-card" onClick={() => setActiveView('shark')}>
                    <span className="option-icon">🔢</span>
                    <span className="option-label">Shark Calculator</span>
                </button>
            </div>
        </div>
    );
}
