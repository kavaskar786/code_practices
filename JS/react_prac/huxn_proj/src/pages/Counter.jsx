import { useState } from "react";
import "../index.css";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import logo from "../images/counter_logo.png";
import Footer from "../components/Footer";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="h-lvh bg-black">
      <Navbar
        title="My Counter App"
        logo={logo}
        option={["Home", "counter", "About", "Contact"]}
      />
      <div className="h-4/6 flex justify-center items-center 	flex-col w-full">
        <h1 className="text-white	text-3xl pb-2">Simple Counter</h1>
        <h1 className="text-white	text-8xl pb-2">{count}</h1>
        <div className="flex items-center justify-center gap-2">
          <Button text="Decrement" onClick={() => setCount(count - 1)} />
          <Button text="Increment" onClick={() => setCount(count + 1)} />
        </div>
      </div>
      <Footer text="@My counter App" />
    </div>
  );
};
export default Counter;

//moo deng
