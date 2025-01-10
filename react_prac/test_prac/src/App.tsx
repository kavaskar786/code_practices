import Counter from "./components/counter/Counter";
import Greetings from "./components/greetings/Greetings";
import UserProfile from "./components/userProfile/UserProfile";

const App = () => {
  return (
    <>
      <Greetings name="Kavaskar" />
      <Counter />
      <UserProfile userId={4} />
    </>
  );
};
export default App;
