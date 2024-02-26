import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./styles/Buttons.css";
import {PaymentOptions} from './PaymentOptions';

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

const AddTrans = ({answer})=> {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();

  const { addTransaction } = useContext(GlobalContext);
  const [selectedOption, setSelectedOption] = useState('CASH');

  const options = ['CASH', 'Online', 'Due'];

  const onSelectOption = (value) => {
    setSelectedOption(value);
  };
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
      text:selectedOption,
      amount: + isNaN(parseInt(answer)) ? 0 : parseInt(answer),
      date: formattedDate,
     
    };
    console.log(selectedOption)
    addTransaction(newTransaction);
    setAmount("");
    setText("");
    setDate("");
  };
  return (
    <>
    <div className="show-btncal">
    <PaymentOptions  className="payment-options-select" id="btncalopt"
        options={options}
        selectedOption={selectedOption}
        onSelectOption={onSelectOption}
      />
      </div>
      <form onSubmit={handleSubmit}>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTrans;
