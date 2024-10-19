import { useState, useEffect } from "react";
import Button from "../components/Button";
const Calculator = () => {
  const [result, setResult] = useState(0);
  const [expression, setExpression] = useState("");
  const handleClear = () => {
    setExpression("");
    setResult(0);
  };
  const handleEval = () => {
    setResult(eval(expression));
  };
  return (
    <div className="h-svh flex items-center justify-center flex-col	bg-gradient-to-r from-violet-500 to-fuchsia-500 overflow-hidden">
      <div className="">
        <h1 className="text-white mb-4 text-xl font-semibold">
          My calculator App
        </h1>
      </div>
      <div className="bg-white rounded-2xl overflow-hidden">
        <div className=" w-44 ">
          <p className="text-black text-2xl	">{expression}</p>
          <p className="text-black text-2xl	">{result}</p>
        </div>
        <div className="grid grid-cols-4 w-48 h-60 ">
          <Button
            text="c"
            onClick={handleClear}
            className="rounded-none col-span-2 bg-amber-600 "
          />
          <Button
            text="/"
            onClick={() => {
              setExpression(expression + "/");
            }}
            className="rounded-none	"
          />
          <Button
            text="*"
            onClick={() => {
              setExpression(expression + "*");
            }}
            className="rounded-none	"
          />
          <Button
            text="7"
            onClick={() => {
              setExpression(expression + "7");
            }}
            className="rounded-none	"
          />
          <Button
            text="8"
            onClick={() => {
              setExpression(expression + "8");
            }}
            className="rounded-none	"
          />
          <Button
            text="9"
            onClick={() => {
              setExpression(expression + "9");
            }}
            className="rounded-none	"
          />
          <Button
            text="-"
            onClick={() => {
              setExpression(expression + "-");
            }}
            className="rounded-none	"
          />
          <Button
            text="4"
            onClick={() => {
              setExpression(expression + "4");
            }}
            className="rounded-none	"
          />
          <Button
            text="5"
            onClick={() => {
              setExpression(expression + "5");
            }}
            className="rounded-none	"
          />
          <Button
            text="6"
            onClick={() => {
              setExpression(expression + "6");
            }}
            className="rounded-none	"
          />
          <Button
            text="+"
            onClick={() => {
              setExpression(expression + "+");
            }}
            className="rounded-none row-span-2"
          />
          <Button
            text="1"
            onClick={() => {
              setExpression(expression + "1");
            }}
            className="rounded-none	"
          />
          <Button
            text="2"
            onClick={() => {
              setExpression(expression + "2");
            }}
            className="rounded-none	"
          />
          <Button
            text="3"
            onClick={() => {
              setExpression(expression + "3");
            }}
            className="rounded-none	"
          />
          <Button
            text="0"
            onClick={() => {
              setExpression(expression + "0");
            }}
            className="rounded-none	"
          />
          <Button
            text="00"
            onClick={() => {
              setExpression(expression + "00");
            }}
            className="rounded-none	"
          />
          <Button
            text="."
            onClick={() => {
              setExpression(expression + ".");
            }}
            className="rounded-none	"
          />
          <Button text="=" onClick={handleEval} className="rounded-none	" />
        </div>
      </div>
    </div>
  );
};
export default Calculator;
