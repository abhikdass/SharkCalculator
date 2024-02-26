import React, { useState } from "react";
import "./styles/Buttons.css";
// import CALCULATOR_BUTTONS from "./CalculatorButtons";
export const Buttons = ({ inputHandler, clearInput, backspace, changePlusMinus, calculateAns }) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtncal").click();
    }
  });
  return (
    <div className="show-btncal">
      <button className="btncal exp" onClick={inputHandler}>
        ^
      </button>
      <button className="btncal exp" onClick={inputHandler}>
        (
      </button>
      <button className="btncal exp" onClick={inputHandler}>
        )
      </button>
      <button className="btncal exp" onClick={inputHandler}>
        √
      </button>
      <button className="btncal exp" onClick={inputHandler}>
        x<sup>2</sup>
      </button>
      <button className="btncal clr" onClick={clearInput}>
        AC
      </button>
      <button className="btncal clr" onClick={backspace}>
        ⌫
      </button>
      <button className="btncal exp" onClick={inputHandler}>
        log
      </button>
      <button className="btncal exp" onClick={inputHandler}>
        ÷
      </button>
      <button className="btncal exp" onClick={inputHandler}>
        %
      </button>
      <button className="btncal" onClick={inputHandler}>
        7
      </button>
      <button className="btncal" onClick={inputHandler}>
        8
      </button>
      <button className="btncal" onClick={inputHandler}>
        9
      </button>
      <button className="btncal exp" onClick={inputHandler}>
        x
      </button>
      <button className="btncal exp" onClick={inputHandler}>
        x<sup>3</sup>
      </button>
      <button className="btncal" onClick={inputHandler}>
        4
      </button>
      <button className="btncal" onClick={inputHandler}>
        5
      </button>
      <button className="btncal" onClick={inputHandler}>
        6
      </button>
      <button className="btncal exp" onClick={inputHandler}>
        -
      </button>
      <button className="btncal exp" onClick={inputHandler}>
        <sup>3</sup>√
      </button>
      <button className="btncal" onClick={inputHandler}>
        1
      </button>
      <button className="btncal" onClick={inputHandler}>
        2
      </button>
      <button className="btncal" onClick={inputHandler}>
        3
      </button>
      <button className="btncal exp" onClick={inputHandler}>
        +
      </button>
      <button className="btncal exp" onClick={inputHandler}>
        !
      </button>
      <button className="btncal exp" onClick={changePlusMinus}>
        ±
      </button>
      <button className="btncal" onClick={inputHandler}>
        0
      </button>
      <button className="btncal exp" onClick={inputHandler}>
        .
      </button>
      <button className="btncal exp equal" id="equalbtncal" onClick={calculateAns}>
        =
      </button>
    </div>
  );
};


