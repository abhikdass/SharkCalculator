import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, curr) => (acc += curr), 0);

  const red = {
    color: "#c0392b",
  };

  const green = {
    color: "#2ecc71",
  };
  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        Total: <span style={total >= 0 ? green : red}>₹{total}</span>
      </h1>
    </>
  );
};

export default Balance;
