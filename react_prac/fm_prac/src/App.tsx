import FlippingCard from "./components/FlippingCard";
import Gestures from "./components/Gestures";
import Animations from "./pages/Animations";
import Loading from "./pages/Loading";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <Animations />
      <Loading />
      <FlippingCard />
      <Gestures />
    </div>
  );
};
export default App;
