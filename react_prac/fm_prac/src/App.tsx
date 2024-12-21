import FlippingCard from "./components/FlippingCard";
import Animations from "./pages/Animations";
import Loading from "./pages/Loading";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <Animations />
      <Loading />
      <FlippingCard />
    </div>
  );
};
export default App;
