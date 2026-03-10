import { useChange } from "../../App";
import RadioInput from "../../components/RadioInput";
import "../colors/color.css";
const Color = () => {
  const { handleChange } = useChange();
  return (
    <div className="mprice">
      <h2 className="sidebar-title price-title text-xl font-normal	mb-5">
        Color
      </h2>
      <RadioInput
        handleChange={handleChange}
        value={""}
        title={`All`}
        name={`test3`}
        color="bg-gradient-to-r from-purple-500 to-pink-500"
      />
      <RadioInput
        handleChange={handleChange}
        value={`black`}
        title={`Black`}
        name={`test3`}
        color={`bg-black`}
      />
      <RadioInput
        handleChange={handleChange}
        value={`blue`}
        title={`Blue`}
        name={`test3`}
        color={`bg-blue-800`}
      />
      <RadioInput
        handleChange={handleChange}
        value={`red`}
        title={`Red`}
        name={`test3`}
        color={`bg-red-800`}
      />
      <RadioInput
        handleChange={handleChange}
        value={`green`}
        title={`Green`}
        name={`test3`}
        color={`bg-green-800`}
      />
      <RadioInput
        handleChange={handleChange}
        value={`white`}
        title={`white`}
        name={`test3`}
        color={`bg-white`}
      />
    </div>
  );
};
export default Color;
