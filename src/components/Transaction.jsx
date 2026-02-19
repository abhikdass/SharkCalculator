/* eslint-disable react/prop-types */

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { id, amount, text , date} = transaction;
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = amount < 0 ? "-" : "+";
  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      <span className="tx-text">{text}</span>
      <span className="tx-date">{date}</span>
      <span className={sign === '+' ? 'tx-amount-plus' : 'tx-amount-minus'}>
        {sign} {Math.abs(amount)}{" Rs"}
      </span>
      <button onClick={() => deleteTransaction(id)} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Transaction;
