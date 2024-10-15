import { createContext, useContext } from "react";

export const TaskContext = createContext();
const TaskProvider = ({ children }) => {
  const saveTask = (name, todos) => {
    localStorage.setItem(name, JSON.stringify(todos));
  };
  const fetchTask = (name) => {
    return JSON.parse(localStorage.getItem(name));
  };

  return (
    <TaskContext.Provider value={{ saveTask, fetchTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export default TaskProvider;

export const useTask = () => useContext(TaskContext);
