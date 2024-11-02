import RadioInput from "../../components/RadioInput";
import { useChange } from "../../App";
import "./price.css";
const Price = () => {
  const { handleChange } = useChange();
  return (
    <div className="mprice">
      <h2 className="sidebar-title price-title text-xl font-normal	mb-5">
        Price
      </h2>
      <RadioInput
        handleChange={handleChange}
        value={``}
        title={`All`}
        name={`test2`}
      />
      <RadioInput
        handleChange={handleChange}
        value={50}
        title={`$0 - 50`}
        name={`test2`}
      />
      <RadioInput
        handleChange={handleChange}
        value={100}
        title={`$50 - 100`}
        name={`test2`}
      />
      <RadioInput
        handleChange={handleChange}
        value={150}
        title={`$100 - 150`}
        name={`test2`}
      />
      <RadioInput
        handleChange={handleChange}
        value={200}
        title={`$150 - 200`}
        name={`test2`}
      />
    </div>
  );
};
export default Price;
