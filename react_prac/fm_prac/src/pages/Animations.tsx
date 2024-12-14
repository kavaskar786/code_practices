import Transition from "../components/Transition";
import Translate from "../components/Translate";

const Animations = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <p className="mb-20 font-bold text-2xl mt-10">Translate Animations</p>
      <Translate />
      <p className="mb-20 font-bold text-2xl mt-80">
        Translate Animations with transition
      </p>
      <Transition />
    </div>
  );
};
export default Animations;
