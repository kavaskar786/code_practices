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


import React from 'react'
import { useState } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const handlechange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = () => {
    setTodos((prev)=>
      [...prev, {
        id: todos.length + 1,
        title:input,
      }]
    );
    setInput("");
  }

  return (
    <div className="container">
      <input type="text" value={input} onChange={handlechange} className="usr_input" />
      <button className="sbt-button" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Todo
