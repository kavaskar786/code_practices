// import Button from "./components/Button";
// import User from "./components/User";

import Todo from "./components/Todo";

// import AdminInfo from "./components/AdminInfo";
// import StatePract from "./components/StatePract";
// import UserInfo from "./components/UserInfo";
// import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <>
      {/* <User name="kavaskar" age={20}>
        <p>hello</p>
      </User>
      <Button
        label="Click me"
        onClick={() => console.log("Clicked!")}
        disabled
      /> */}

      {/* <p>UserInfo👇</p>
      <UserInfo
        username="Alex"
        email="alex@gmail.com"
        age={20}
        location={["earth", "USA"]}
      />
      <p>AdminInfo👇</p>
      <AdminInfo
        username="Alex"
        email="alex@gmail.com"
        age={20}
        location={["Mars", "Unknown"]}
        admin="yes"
      />
      <StatePract />
      <UserProfile /> */}
      <Todo />
    </>
  );
};
export default App;
