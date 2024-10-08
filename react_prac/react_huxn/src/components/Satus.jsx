import { useState } from "react";

const Satus = ({ isAdmin, isLoggedIn }) => {
  let [x, setX] = useState(200);
  const cngVal = () => {
    setX(x + 100);
  };
  return (
    <div>
      {isAdmin && isLoggedIn && <h1> Welcome Admin</h1>}
      {!isAdmin && isLoggedIn && <h1> Welcome User</h1>}
      {console.log(isAdmin, isLoggedIn)}
      <p>{x}</p>
      <button onClick={cngVal}>click me!</button>
    </div>
  );
};
export default Satus;
