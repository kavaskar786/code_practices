import { useChange } from "../../App";
import RadioInput from "../../components/RadioInput";
import "./category.css";
const Category = () => {
  const { handleChange } = useChange();
  return (
    <div>
      <h2 className="sidebar-title text-xl font-normal	mb-5    ">Category</h2>
      <div className="">
        <RadioInput
          handleChange={handleChange}
          value=""
          title="All"
          name="test"
        />
        <RadioInput
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <RadioInput
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <RadioInput
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <RadioInput
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
        <RadioInput
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
      </div>
    </div>
  );
};
export default Category;
