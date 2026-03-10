import { ReactNode, useState } from "react";
import { LoadingContext } from "./contexts";

const MainContext = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default MainContext;
