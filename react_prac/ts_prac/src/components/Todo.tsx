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
    if (taskinput.title && taskinput.description) {
      setTodo([...todo, taskinput]);
      setTaskInput({
        title: "",
        description: "",
        iscompleted: false,
      });
    } else {
      alert("Please provide both title and description");
    }
  };

  const handleCompleteClick = (index: number) => {
    setTodo(
      todo.map((task, i) =>
        i === index ? { ...task, iscompleted: !task.iscompleted } : task
      )
    );
  };

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={taskinput.title}
          name="title"
          placeholder="Enter task title"
          onChange={(e) =>
            setTaskInput({ ...taskinput, title: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          value={taskinput.description}
          name="description"
          placeholder="Enter task description"
          onChange={(e) =>
            setTaskInput({ ...taskinput, description: e.target.value })
          }
        />
      </div>
      <button onClick={handleAddTask}>Add Task</button>

      <div>
        {todo.map(({ title, description, iscompleted }, index) => (
          <div key={index}>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => handleCompleteClick(index)}>
              {iscompleted ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
