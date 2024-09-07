// const Test = ({ props }) => {
//   return (
//     <div>
//       <h1>{props ? "hello" : "hi"}</h1>
//     </div>
//   );
// };
// const App = () => {
//   return (
//     <div>
//       App
//       <Test props={false} />
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increase = () => {
//   setCount(count + 1)
// };

// const decrement = () => {
//   setCount(count - 1)
// };
//   return (
//     <div>
//       <h1>{ count }</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );

// };

// const App = () => {
//   return (
//     <div>
//       <Counter />;
//     </div>
//   )
// }

// export default App


import React from 'react';
import { useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([{ id: 1, title: "singam", ratings: 8 }, { id: 2, title: "singam2", ratings: 7 }]);
  const handleClick = () => {
    setMovies(movies.map((m)=>(m.id === 1?{...m,title:"singam3"}:m)))
  }
  return (
    <div>

      <h1>movies</h1>
      {movies.map((m) => (
        <ul>
          <li key={m.id}>{m.title}</li>
          <li key={m.id}>{m.ratings}</li>
        </ul>
      ))}
      <button onClick={handleClick}>change the name</button>
    </div>
  );
}
const App = () => {
  return (
    <div>
      <Movies />
    </div>
  )
}

export default App
