import { createContext, Dispatch, SetStateAction, useContext } from "react";

// Define the type for the context value
type LoadingContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

// Create the context with a default value
export const LoadingContext = createContext<LoadingContextType>({
  loading: true,
  setLoading: () => {}, // Default is a no-op function
});

export const useLoadingContext = () => useContext(LoadingContext);
