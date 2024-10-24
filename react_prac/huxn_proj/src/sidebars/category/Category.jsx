import "./category.css";
const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title text-xl font-normal	mb-5    ">Category</h2>
      <div className="">
        <label className="side-label-container  block relative	pl-9 mb-3 cursor-pointer select-none">
          <input
            type="radio"
            name="test"
            className="absolute opacity-0 cursor-pointer"
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-white rounded-full"></span>
          All
        </label>
        <label className="side-label-container block relative	pl-9 mb-3 cursor-pointer select-none">
          <input
            type="radio"
            name="test"
            className="absolute opacity-0 cursor-pointer"
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-white rounded-full"></span>
          Sneakers
        </label>
        <label className="side-label-container block relative	pl-9 mb-3 cursor-pointer select-none">
          <input
            type="radio"
            name="test"
            className="absolute opacity-0 cursor-pointer"
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-white rounded-full"></span>
          Flats
        </label>
        <label className="side-label-container block relative	pl-9 mb-3 cursor-pointer select-none">
          <input
            type="radio"
            name="test"
            className="absolute opacity-0 cursor-pointer"
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-white rounded-full"></span>
          Sandals
        </label>
        <label className="side-label-container block relative	pl-9 mb-3 cursor-pointer select-none">
          <input
            type="radio"
            name="test"
            className="absolute opacity-0 cursor-pointer"
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-white rounded-full"></span>
          Heels
        </label>
      </div>
    </div>
  );
};
export default Category;
