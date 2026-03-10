import { useRef } from "react";

const FocusInput = () => {
  const input = useRef<HTMLInputElement>(null);
  return (
    <div>
      FocusInput
      <div>
        <input type="text" ref={input} placeholder="test hello" />
      </div>
      <button onClick={() => input.current?.focus()}>Focus</button>
    </div>
  );
};
export default FocusInput;
