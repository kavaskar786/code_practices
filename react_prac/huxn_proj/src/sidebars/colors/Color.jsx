import "../colors/color.css";
const Color = () => {
  return (
    <div className="mprice mr-7">
      <h2 className="sidebar-title price-title text-xl font-normal	mb-5">
        Color
      </h2>
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
        Black
      </label>
      <label className="side-label-container  block relative	pl-9 mb-3 cursor-pointer select-none">
        <input
          type="radio"
          name="test2"
          className="absolute opacity-0 cursor-pointer"
        />
        <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-white rounded-full"></span>
        Blue
      </label>
      <label className="side-label-container  block relative	pl-9 mb-3 cursor-pointer select-none">
        <input
          type="radio"
          name="test2 "
          className="absolute opacity-0 cursor-pointer"
        />
        <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-white rounded-full"></span>
        Red
      </label>
      <label className="side-label-container  block relative	pl-9 mb-3 cursor-pointer select-none">
        <input
          type="radio"
          name="test2"
          className="absolute opacity-0 cursor-pointer"
        />
        <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-white rounded-full"></span>
        Green
      </label>
      <label className="side-label-container  block relative	pl-9 mb-3 cursor-pointer select-none">
        <input
          type="radio"
          name="test2"
          className="absolute opacity-0 cursor-pointer"
        />
        <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-white rounded-full"></span>
        White
      </label>
    </div>
  );
};
export default Color;
