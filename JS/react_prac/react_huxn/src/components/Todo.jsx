import { useState } from "react";

const Todo = () => {
  const [tasks, setTask] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...tasks, { taskname: taskName, taskdesc: taskDesc }]);
    setTaskName("");
    setTaskDesc("");
    console.log(tasks);
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };
  const handleChange1 = (e) => {
    setTaskDesc(e.target.value);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="taskname">Task Name : </label>
          <input
            type="text"
            name="taskname"
            onChange={handleChange}
            value={taskName}
            placeholder="enter the task name"
          />
        </div>
        <br />
        <div className="">
          <label htmlFor="desc">Description : </label>
          <input
            type="text"
            name="desc"
            onChange={handleChange1}
            value={taskDesc}
            placeholder="enter task description"
          />
        </div>
        <input type="submit" />
      </form>
      <div className="listtask">
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>{item.taskname}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
