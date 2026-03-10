import { useState } from "react";

const Satus = ({ isAdmin, isLoggedIn }) => {
  let [x, setX] = useState(200);
  const cngVal = () => {
    setX(x + 100);
  };
  const [arr, setArr] = useState(["hello", "hi"]);
  const addHey = () => {
    setArr([...arr, "hey"]);
  };
  const rmHey = () => {
    setArr(arr.filter((item) => item !== "hey"));
  };

  const updateHey = () => {
    setArr(arr.map((item) => (item === "hey" ? "welcome" : item)));
  };

  return (
    <div>
      {isAdmin && isLoggedIn && <h1> Welcome Admin</h1>}
      {!isAdmin && isLoggedIn && <h1> Welcome User</h1>}
      {console.log(isAdmin, isLoggedIn)}
      <p>{x}</p>
      <ul>
        {arr.map((item, inx) => (
          <li key={inx}>{item}</li>
        ))}
      </ul>
      <button onClick={cngVal}>click me!</button>
      <button onClick={addHey}>Add</button>
      <button onClick={rmHey}>Remove</button>
      <button onClick={updateHey}>update</button>
    </div>
  );
};
export default Satus;
