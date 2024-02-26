/* eslint-disable react/prop-types */

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { id, amount, text , date} = transaction;
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = amount < 0 ? "-" : "+";
  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      <span style={{ color: 'black' , textTransform: 'capitalize'}}>
      {text}
      </span>
      <span style={{ color: 'gray' }}>
        {date}
      </span>
      <span style={{ color: sign === '+' ? 'green' : 'red' }}>
        {sign} {Math.abs(amount)}{" Rs"}
      </span>
      <button onClick={() => deleteTransaction(id)} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Transaction;
