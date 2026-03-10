import Keyframes from "../components/Keyframes";
import Transition from "../components/Transition";
import Translate from "../components/Translate";

const Animations = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <p className="mb-20 font-bold text-2xl mt-10">Translate Animations</p>
      <Translate />
      <p className="mb-20 font-bold text-2xl mt-80">
        Translate Animations with transition
      </p>
      <Transition />
      <p className="mb-20 font-bold text-2xl mt-80">
        Animation with key frames
      </p>
      <Keyframes />
    </div>
  );
};
export default Animations;
