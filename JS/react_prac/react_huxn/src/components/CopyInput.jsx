import { useState } from "react";
import Popup from "./Popup";

const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div>
      <h1>CopyInput</h1>
      <input
        type="text"
        value={inputValue}
        placeholder="enter anything"
        name="input"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      <Popup copied={copied} />
    </div>
  );
};
export default CopyInput;
