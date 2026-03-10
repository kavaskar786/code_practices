import { useEffect, useRef, useState } from "react";
import InputText from "../components/InputText";
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import Button from "../components/Button";
import { useTask } from "../context/TaskContext";
import { IoMdSettings } from "react-icons/io";
import logo from "../images/image.png";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const id = useRef(0);
  const updateId = useRef(0);
  const { saveTask, fetchTask } = useTask();
  const handleSubmit = () => {
    setTodos([...todos, { id: id.current, task: input }]);
    setInput("");
  };
  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = () => {
    const id = updateId.current;
    setTodos(todos.map((t) => (t.id === id ? { id: id, task: input } : t)));
    setInput("");
    setIsEdit(false);
  };
  const updateInput = (id) => {
    setInput(todos[id].task);
    updateId.current = id;
    setIsEdit(true);
  };
  useEffect(() => {
    setTodos(fetchTask("tasks"));
  }, []);
  useEffect(() => {
    id.current = todos.length ? todos[todos.length - 1].id + 1 : 0;
    saveTask("tasks", todos);
  }, [todos]);
  return (
    <div className="h-lvh bg-gradient-to-r from-purple-500 to-pink-500 ">
      <div className="h-1/6 ">
        <div className="bg-fuchsia-900">
          <nav className="list-none text-white flex justify-between items-center mx-5">
            <div className="logo flex justify-center items-center gap-2">
              <img src={logo} alt="Logo" className="h-8 w-8 rounded-md" />
              <p>My Task App</p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <li className="px-4 py-2 h-12 rounded-2xl">
                <a href="">Home</a>
              </li>
              <li className="px-4 py-2 h-12 rounded-2xl">
                <a href="">Tasks</a>
              </li>
              <li className="px-4 py-2 h-12 rounded-2xl">
                <a href="">Remainder</a>
              </li>
              <li className="px-4 py-2 h-12 rounded-2xl">
                <a href="">About</a>
              </li>
            </div>
            <div className="right_part flex justify-center items-center gap-2 text-xl	">
              <a href="">
                <p>
                  <MdAccountCircle />
                </p>
              </a>
              <a href="">
                <p>
                  <IoMdSettings />
                </p>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="h-4/6 flex justify-center items-center flex-col">
        <div className="taskinput flex justify-center items-center gap-4 bg-white rounded-3xl px-8 py-20 flex-col">
          <div className="flex justify-center items-center gap-2">
            <InputText
              value={input}
              onChange={setInput}
              placeHolder="Enter the Task"
            />
            {isEdit ? (
              <Button
                text="Edit"
                onClick={handleEdit}
                className="rounded-3xl "
              />
            ) : (
              <Button
                text="Submit"
                onClick={handleSubmit}
                className="rounded-3xl "
              />
            )}
          </div>
          <div className="listing">
            <ul>
              {todos.map(({ id, task }, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between gap-2 mb-2"
                >
                  <div className="">{`${task} `} </div>
                  <div className="flex items-center justify-center gap-2">
                    <Button
                      text={<MdOutlineDeleteForever />}
                      onClick={() => removeTask(id)}
                      className="rounded-full px-2 py-2"
                    />
                    <Button
                      text="Edit"
                      onClick={() => updateInput(id)}
                      className="rounded-full px-2 py-2"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-1/6 text-white flex items-end justify-center">
        <div className="py-4 bg-fuchsia-900 w-full flex items-center justify-center">
          <p>
            All rights reserved{" "}
            <span className="text-cyan-200">@My task App</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Todo;
