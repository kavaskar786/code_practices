import { useRef, useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};
const Todo = () => {
  const [todo, setTodo] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>({
    id: 1,
    title: "",
    description: "",
    isCompleted: false,
  });
  const id = useRef<number>(1);
  const handleAddTask = () => {
    setTodo([...todo, task]);
    id.current = id.current + 1;
    setTask({
      id: id.current,
      title: "",
      description: "",
      isCompleted: false,
    });
  };
  const handleComChng = (id: number) => {
    setTodo(
      todo.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
    );
  };
  const handleDelete = (id: number) => {
    setTodo(todo.filter((t) => t.id !== id));
  };
  return (
    <div>
      <div className="">
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </div>
      <div className="">
        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>
      <button onClick={handleAddTask}>Add Task</button>
      <div className="">
        {todo.map(({ id, title, description, isCompleted }, index) => (
          <div key={index}>
            {`${id} ${title} ${description}`}{" "}
            <button onClick={() => handleComChng(id)}>
              {isCompleted ? "completed" : "Finish"}
            </button>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todo;
