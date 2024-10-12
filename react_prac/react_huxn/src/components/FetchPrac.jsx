import { useEffect, useState } from "react";

const FetchPrac = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
    console.log("hi i am from useEffect hook");
  }, []);
  useEffect(() => {
    document.title = count;
  }, [count]);
  return (
    <div>
      <h1>Title Counter</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>FetchPrac</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{`${item.id} ${item.title}`}</li>
        ))}
      </ul>
    </div>
  );
};
export default FetchPrac;
