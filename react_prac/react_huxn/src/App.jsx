// const App = () => {
//   return <section>hello 😁😁</section>;
// };

import CountReducer from "./components/CountReducer";
import Test from "./components/Test";

// import UserProfile from "./components/UserProfile";
// import UserProvider from "./components/UserProvider";

// import PropDrilling1 from "./components/PropDrilling1";
// import { createContext } from "react";

// import FetchPrac from "./components/FetchPrac";

// import CopyInput from "./components/CopyInput";

// import Counter from "./components/Counter";
// import Profile from "./components/Profile";
// import ShopingList from "./components/ShopingList";
// import Todo from "./components/Todo";
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

// export const Data = createContext();
// export const Data1 = createContext();

function App() {
  // const name = "kavaskar";
  // const name2 = "likitha";
  // const age = 22;
  return (
    <div>
      <Test />
      <CountReducer />
      {/* <UserProvider>
        <UserProfile />
      </UserProvider> */}
      {/* <Data.Provider value={{ name1: name, name2: name2 }}>
        <Data1.Provider value={age}>
          <PropDrilling1 />
        </Data1.Provider>
      </Data.Provider> */}

      {/* <FetchPrac /> */}
      {/* <CopyInput /> */}
      {/* <ShopingList />
      <Profile />
      <Todo />
      <Counter /> */}
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
