import React, { useState } from "react";
import Button from "./Button";
import "./App.css";

const Calculator = () => {
  const [value, setValue] = useState("0");
  const [numInMemory, setNumInMemory] = useState(parseFloat(value));
  const [operator, setOperator] = useState(null);

  const handleButtonPress = (name) => () => {
    switch (name) {
      case "AC":
        setValue("0");
        setNumInMemory(null);
        setOperator(null);
        break;

      case "±":
        setValue((parseFloat(value) * -1).toString());
        break;

      case "%":
        setValue((parseFloat(value) / 100).toString());
        setNumInMemory(null);
        setOperator(null);
        break;

      case ".":
        if (value.includes("."))
          break;
        setValue(value + ".")
        break;

      case "+":
        if (operator != null) {
          if (operator === "+") {
            setNumInMemory(numInMemory + parseFloat(value));
          } else if (operator === "−") {
            setNumInMemory(numInMemory - parseFloat(value));
          } else if (operator === "÷") {
            setNumInMemory(numInMemory / parseFloat(value));
          } else if (operator === "×") {
            setNumInMemory(numInMemory * parseFloat(value));
          }
        } else {
          setNumInMemory(parseFloat(value));
        }
        setValue("0");
        setOperator("+");
        break;

      case "×":
        if (operator != null) {
          if (operator === "×") {
            setNumInMemory(numInMemory * parseFloat(value));
          } else if (operator === "−") {
            setNumInMemory(numInMemory - parseFloat(value));
          } else if (operator === "÷") {
            setNumInMemory(numInMemory / parseFloat(value));
          } else if (operator === "+") {
            setNumInMemory(numInMemory + parseFloat(value));
          }
        } else {
          setNumInMemory(parseFloat(value));
        }
        setValue("0");
        setOperator("×");
        break;

      case "−":
        if (operator != null) {
          if (operator === "−") {
            setNumInMemory(numInMemory - parseFloat(value));
          } else if (operator === "+") {
            setNumInMemory(numInMemory + parseFloat(value));
          } else if (operator === "÷") {
            setNumInMemory(numInMemory / parseFloat(value));
          } else if (operator === "×") {
            setNumInMemory(numInMemory * parseFloat(value));
          }
        } else {
          setNumInMemory(parseFloat(value));
        }
        setValue("0");
        setOperator("−");
        break;

      case "÷":
        if (operator != null) {
          if (operator === "÷") {
            setNumInMemory(numInMemory / parseFloat(value));
          } else if (operator === "−") {
            setNumInMemory(numInMemory - parseFloat(value));
          } else if (operator === "+") {
            setNumInMemory(numInMemory + parseFloat(value));
          } else if (operator === "×") {
            setNumInMemory(numInMemory * parseFloat(value));
          }
        } else {
          setNumInMemory(parseFloat(value));
        }
        setValue("0");
        setOperator("÷");
        break;

      case "=":
        if (!operator) return;

        if (operator === "+") {
          setValue((numInMemory + parseFloat(value)).toString());
        } else if (operator === "−") {
          setValue((numInMemory - parseFloat(value)).toString());
        } else if (operator === "÷") {
          setValue((numInMemory / parseFloat(value)).toString());
        } else if (operator === "×") {
          setValue((numInMemory * parseFloat(value)).toString());
        }

        setNumInMemory(null);
        setOperator("=");
        break;

      default:
        setValue(parseFloat(value + name).toString());
        if (operator === "=")
        {
          setValue(name);
          setOperator(null);
        }
        break;
    }
  };
  return (
    <React.Fragment>
      <div className="calculator">
        <div className="display">
          <div className="value">{value}</div>
        </div>
        <div className="buttons">
          <Button
            type="function"
            onButtonClick={handleButtonPress}
            name="AC"
          ></Button>
          <Button
            type="function"
            onButtonClick={handleButtonPress}
            name="±"
          ></Button>
          <Button
            type="function"
            onButtonClick={handleButtonPress}
            name="%"
          ></Button>
          <Button
            type="operator"
            onButtonClick={handleButtonPress}
            name="÷"
          ></Button>
          <Button
            type="number"
            onButtonClick={handleButtonPress}
            name="7"
          ></Button>
          <Button
            type="number"
            onButtonClick={handleButtonPress}
            name="8"
          ></Button>
          <Button
            type="number"
            onButtonClick={handleButtonPress}
            name="9"
          ></Button>
          <Button
            type="operator"
            onButtonClick={handleButtonPress}
            name="×"
          ></Button>
          <Button
            type="number"
            onButtonClick={handleButtonPress}
            name="4"
          ></Button>
          <Button
            type="number"
            onButtonClick={handleButtonPress}
            name="5"
          ></Button>
          <Button
            type="number"
            onButtonClick={handleButtonPress}
            name="6"
          ></Button>
          <Button
            type="operator"
            onButtonClick={handleButtonPress}
            name="−"
          ></Button>
          <Button
            type="number"
            onButtonClick={handleButtonPress}
            name="1"
          ></Button>
          <Button
            type="number"
            onButtonClick={handleButtonPress}
            name="2"
          ></Button>
          <Button
            type="number"
            onButtonClick={handleButtonPress}
            name="3"
          ></Button>
          <Button
            type="operator"
            onButtonClick={handleButtonPress}
            name="+"
          ></Button>
          <Button
            type="number"
            onButtonClick={handleButtonPress}
            name="0"
          ></Button>
          <Button
            type="number"
            onButtonClick={handleButtonPress}
            name="."
          ></Button>
          <Button
            type="operator"
            onButtonClick={handleButtonPress}
            name="="
          ></Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calculator;
