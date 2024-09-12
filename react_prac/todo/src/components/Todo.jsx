// import React from 'react';
// import { useState } from 'react';

// const Todo = () => {
//     const [todos, setTodos] = useState([]);
//     const [task, setTask] = useState({});
//     const [count, setCount] = useState(0);
//     const genCount = () => {
//         setCount(count + 1);
//         return count
//     }
//     const handleInpChange = (e) => {
//         setTask({
//             id: genCount(),
//             title: e.target.value
//         });
//     }

//     const handleAdd = () => {
//         setTodos([...todos, task]);
//         setTask("");
//     }

//     const handleRmTask = (id) => {
//         setTodos(todos.filter((t)=> t.id !== id));
//     }
//   return (
//       <div>
//           <h1>Todo List</h1>
          
//           {todos.map(t =>(
              
//               <li key={t.id}>{t.title}
//               <button onClick={handleRmTask(t.id)}>X</button>
//               </li>
//               ))}
          
//           <input type="text"  value={task.title} placeholder='enter the task here' onChange={handleInpChange}   />
//           <button onClick={handleAdd}>Add</button>
//     </div>
//   )
// }

// export default Todo


// import React from 'react'
// import { useState } from 'react'

// const Todo = () => {
//     const [todos, setTodos] = useState([]);
//     const [input, setInput] = useState("");
//     const [count, setCount] = useState(0);
//     const generateid = () => {
//         setCount(count + 1);
//         return count
//     }
//     const handlesubmit = () => {
//         setTodos(() => {
//             todos.concat({
//                 id: generateid(),
//                 title: input,
//             })
//         });
//         setInput("");
//     }
//   return (
//       <>
//           <h1>Todo list</h1>
         
//           <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
//           <button onClick={handlesubmit}></button>
       
//       </>
//   )
// }

// export default Todo

// import { useState } from "react";

// const Todo = () => {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const handleSubmit = () => {
//       // Ensure the todos state is updated with a new array, including the new todo
//       setTodos((prevTodos) => [
//         ...prevTodos,
//         {
//           id: prevTodos.length + 1,
//           title: input,
//         },
//       ]);
//       setInput(""); // Clear input field
//   };

//   const removeTodo = (id) => {
//     // Remove the todo with the matching id
//     setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
//   };

//   return (
//     <div className="container">
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="New todo"
//       />
//       <button onClick={handleSubmit}>Submit</button>
//       <ul className="todos-list">
//         {todos.map(({ title, id }) => (
//           <li key={id}>
//             <span>{title}</span>
//             <button onClick={() => removeTodo(id)}>X</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Todo;


// import React from 'react'
// import { useState } from 'react'

// const Todo = () => {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");
//   const [isMark, setIsMark] = useState(false);
//   const handlechange = (e) => {
//     setInput(e.target.value);
//   }

//   const handleSubmit = () => {
//     setTodos((prev)=>
//       [...prev, {
//         id: todos.length + 1,
//         title: input,
//         completed : false
//       }]
//     );
//     setInput("");
//   }

//   const handleRemove = (id) => {
//     setTodos(
//       (prev) => prev.filter((t) => t.id !== id)
//     )
//   };

//   const handleMark = (id) => {
//     setTodos(
//       (prev) => prev.map((x) => (
//         x.id === id ? x.completed === false ? { ...x, completed: true }: { ...x, completed: false } : x
//       )));
//       setIsMark(!isMark);
//   }

//   return (
//     <div className="container">
//       <ul className="list-task">
//         {todos.map(({ id, title, completed},i) => (
//           <li key={id}>{`${i}. ${title} , ${completed}`}
//             <button className="rm-btn" onClick={() => handleRemove(id)}>X</button>
//             <button className="markcmpbtn" onClick={() => handleMark(id)}>{ isMark ? 'redo' : 'MarkAsCompleted' }</button>
//           </li>
//         ))}
//       </ul>
//       <input type="text" value={input} onChange={handlechange} className="usr_input" />
//       <button className="sbt-button" onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

// export default Todo

import React, { useState } from "react";


function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Simple To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, ind) => (
          
          <li key={ind} className={task.completed ? "completed" : ""}>
            {task.text}
            {console.log(ind)}
            <div className="actions">
              <button onClick={() => toggleCompletion(ind)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteTask(ind)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
