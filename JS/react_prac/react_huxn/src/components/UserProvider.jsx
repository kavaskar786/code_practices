import { createContext, useContext, useState } from "react";
export const userContext = createContext();
const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState({ name: "kavsakar", age: "22" });
  return (
    <div>
      <h1>UserProvider</h1>
      <userContext.Provider value={{ profile, setProfile }}>
        {children}
      </userContext.Provider>
    </div>
  );
};
export default UserProvider;

export const useProfile = () => useContext(userContext);
