import React from "react";
import "./styles/Display.css";
import Balance from "./Balance";
import { size } from "mathjs";

export const Display = ({ input, setInput, answer }) => {
  const onChangeTagInput = (e) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <>
    <Balance/>
      <div className="display">
        {answer === "" ? (
          <>
            <input
              type="text"
              name="input"
              className="input"
              style={{ padding: "29px" }}
              value={input}
              placeholder="0"
              maxLength={12}
              // disabled
              onChange={onChangeTagInput}
              autoComplete="off"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="input"
              className="value"
              style={{fontSize:'20px'}}
              value={input}
              placeholder="0"
              maxLength={12}
              disabled
            />
            <input
              type="text"
              name="value"
              className="input"
              style={{fontSize:'40px'}}
              value={answer}
            />
          </>
        )}
      </div>
    </>
  );
};

