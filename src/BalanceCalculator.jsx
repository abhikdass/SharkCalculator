// balance_calculator.js
import React from "react";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import Title from "./components/Title";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

export function BalanceCalculator() {
  // Your balance calculator component logic here
  return (
    <GlobalProvider>
      <Title />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
