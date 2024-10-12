import { useState } from "react";

const ShopingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) {
      return;
    }
    setItems((prev) => [...prev, { name, quantity: parseInt(quantity) }]);
    setName("");
    setQuantity("");
  };
  return (
    <div>
      <h1>ShopingList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="itme name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="itme name"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">add a new item</button>
      </form>
      <div className="list">
        <h1>Item list</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity : {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ShopingList;
