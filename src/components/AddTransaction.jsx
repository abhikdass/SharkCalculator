import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
const getOrdinalSuffix = (number) => {
  if (number === 11 || number === 12 || number === 13) {
    return "th";
  }
  const lastDigit = number % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const getMonthName = (monthIndex) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[monthIndex];
};

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const formattedDate =
      currentDate.getDate() +
      getOrdinalSuffix(currentDate.getDate()) + // Add the ordinal suffix (e.g., "th", "st", "nd")
      " " +
      getMonthName(currentDate.getMonth()) + // Get the month name (e.g., "Feb")
      " " +
      currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); // Get the time in HH:mm format

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
      date: formattedDate,
     
    };

    addTransaction(newTransaction);
    setAmount("");
    setText("");
    setDate("");
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter text"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
