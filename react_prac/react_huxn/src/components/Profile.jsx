import { useState } from "react";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [info, setInfo] = useState({ name: "", age: "" });
  //   const [name, SetName] = useState("");
  //   const [age, SetAge] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, info]);
    setInfo({ name: "", age: "" });
  };
  const handleLiClick = (index) => {
    setInfo(users[index]);
  };
  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name :
            <input
              type="text"
              value={info.name}
              name="name"
              placeholder="enter your name"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Age :
            <input
              type="text"
              value={info.age}
              name="age"
              placeholder="enter your age"
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit"> add the user </button>
      </form>
      <h3>Profile information</h3>
      <p>Name : {info.name}</p>
      <p>Age : {info.age}</p>
      <h3>List of users</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index} onClick={() => handleLiClick(index)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Profile;
