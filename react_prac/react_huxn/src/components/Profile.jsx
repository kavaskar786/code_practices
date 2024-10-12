import { useState } from "react";

const Profile = () => {
  const [info, setInfo] = useState({ name: "", age: "" });
  //   const [name, SetName] = useState("");
  //   const [age, SetAge] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {};
  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
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
        <label>
          Age :
          <input
            type="text"
            value={info.age}
            name="name"
            placeholder="enter your age"
            onChange={handleChange}
          />
        </label>
        <button type="submit"> submit</button>
      </form>
      <h3>Profile information</h3>
      <p>{info.name}</p>
      <p>{info.age}</p>
    </div>
  );
};
export default Profile;
