import { useState } from "react";

interface Task {
  title: string;
  description: string;
  iscompleted: boolean;
}
const Todo = () => {
  const [todo, setTodo] = useState<Task[]>([]);
  const [taskinput, setTaskInput] = useState<Task>({
    title: "",
    description: "",
    iscompleted: false,
  });
  const handleAddTask = () => {
    setTodo([...todo, taskinput]);
    setTaskInput({
      title: "",
      description: "",
      iscompleted: false,
    });
  };
  const handleCompleteClick = (index: number) => {
    setTodo(
      todo.map((task, i) =>
        i === index
          ? {
              ...task,
              iscompleted: task.description === "true" ? true : false,
            }
          : task
      )
    );
  };
  return (
    <div>
      Todo
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={taskinput.title}
          name="title"
          placeholder="hello"
          onChange={(e) =>
            setTaskInput({ ...taskinput, title: e.target.value })
          }
        />
      </div>
      <div className="">
        <label htmlFor="title">Description</label>
        <input
          type="text"
          value={taskinput.description}
          name="description"
          placeholder="hello"
          onChange={(e) =>
            setTaskInput({ ...taskinput, description: e.target.value })
          }
        />
      </div>
      <div className="">
        <label htmlFor="radio1">isCompleted</label>
        <input
          type="radio"
          value="true"
          name="radio1"
          onChange={(e) =>
            setTaskInput({
              ...taskinput,
              iscompleted: JSON.parse(e.target.value),
            })
          }
        />
        <input
          type="radio"
          value="false"
          name="radio1"
          onChange={(e) =>
            setTaskInput({
              ...taskinput,
              iscompleted: JSON.parse(e.target.value),
            })
          }
        />
      </div>
      <button onClick={handleAddTask}>Add task</button>
      <div>
        {todo.map(({ title, description, iscompleted }, index) => (
          <div className="" key={index}>
            <h1>{title}</h1>
            <p>{description}</p>
            <button onClick={() => handleCompleteClick(index)}>
              {iscompleted ? "completed" : "complete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todo;
