import { useState } from "react";

const Satus = ({ isAdmin, isLoggedIn }) => {
  let [x, setX] = useState(200);
  const cngVal = () => {
    setX(x + 100);
  };
  let arr = ["hello", "hi", "i am testing"];
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
    </div>
  );
};
export default Satus;
