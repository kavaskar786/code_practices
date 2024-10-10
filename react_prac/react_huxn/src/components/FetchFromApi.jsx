import { useEffect, useState } from "react";
const FetchFromApi = () => {
  const [fact, setFact] = useState([]);
  useEffect(
    () =>
      fetch("https://catfact.ninja/fact")
        // .then((response) => response.json())
        .then((data) => setFact(data))
        .catch((err) => console.log(err)),
    []
  );
  return (
    <div>
      <ul>
        {fact.map((item, index) => (
          <li key={index}>{item.fact}</li>
        ))}
      </ul>
    </div>
  );
};
export default FetchFromApi;
