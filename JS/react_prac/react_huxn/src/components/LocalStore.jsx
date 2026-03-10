import { useEffect, useState } from "react";

const LocalStore = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    savedName ? JSON.parse(savedName) : "";
  });
  useEffect(() => localStorage.setItem("name", JSON.stringify(name)), [name]);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleClear = () => setName("");
  return (
    <div>
      <p>hello {name}</p>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="enter your name"
      />
      <button onClick={handleClear}>Clear name</button>
    </div>
  );
};
export default LocalStore;
