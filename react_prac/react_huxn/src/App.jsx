// const App = () => {
//   return <section>hello 😁😁</section>;
// };

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/main";
import Satus from "./components/Satus";
import Weather from "./components/Weather";

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
      <Satus isLoggedIn={true} isAdmin />
      <Weather temperature={23} />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
