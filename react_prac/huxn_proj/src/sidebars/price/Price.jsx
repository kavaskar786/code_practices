import "./price.css";
const Price = () => {
  return (
    <div className="mprice">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="side-label-container  block relative	pl-9 mb-3 cursor-pointer select-none">
        <input
          type="radio"
          name="test2"
          className="absolute opacity-0 cursor-pointer"
        />
        <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-white rounded-full"></span>
        All
      </label>
      <label className="side-label-container  block relative	pl-9 mb-3 cursor-pointer select-none">
        <input
          type="radio"
          name="test2"
          className="absolute opacity-0 cursor-pointer"
        />
        <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-white rounded-full"></span>
        $0 - %
      </label>
      <label className="side-label-container  block relative	pl-9 mb-3 cursor-pointer select-none">
        <input
          type="radio"
          name="test2"
          className="absolute opacity-0 cursor-pointer"
        />
        <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-white rounded-full"></span>
        All
      </label>
      <label className="side-label-container  block relative	pl-9 mb-3 cursor-pointer select-none">
        <input
          type="radio"
          name="test2"
          className="absolute opacity-0 cursor-pointer"
        />
        <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-white rounded-full"></span>
        All
      </label>
    </div>
  );
};
export default Price;
