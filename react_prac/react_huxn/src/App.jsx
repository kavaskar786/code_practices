// const App = () => {
//   return <section>hello 😁😁</section>;
// };

import Counter from "./components/Counter";
import Todo from "./components/Todo";
// import LocalStore from "./components/LocalStore";

// import FetchFromApi from "./components/FetchFromApi";
// import JustTest from "./components/JustTest";

// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Main from "./components/main";
// import Satus from "./components/Satus";
// import StyleCard from "./components/StyleCard";
// import Weather from "./components/Weather";

// export default App;

// const Cold = () => {
//   return (
//     <div>
//       <h1>its cold outside</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Todo />
      <Counter />
      {/* <LocalStore /> */}
      {/* <JustTest name="kavaskar" name2="likitha" /> */}
      {/* <FetchFromApi /> */}
      {/* <Satus isLoggedIn={true} isAdmin />
      <Weather temperature={23} />
      <Header />
      <StyleCard />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
