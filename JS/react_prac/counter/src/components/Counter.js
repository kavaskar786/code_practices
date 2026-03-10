import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
  return (
      <>
          <div className="container">
              <h1 className="number">{count}</h1>
              <section className="btns-container">
                  <button className="decrement" onClick={decrement}>-</button>
                  <button className="increment" onClick={increment}>+</button>
              </section>
          </div>
      </>
  )
}

export default Counter
