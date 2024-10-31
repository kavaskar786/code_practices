const RadioInput = () => {
  return (
    <div>
      <label className="side-label-container  block relative	pl-9 mb-3 cursor-pointer select-none">
        <input
          type="radio"
          name="test"
          className="absolute opacity-0 cursor-pointer"
        />
        <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-white rounded-full"></span>
        All
      </label>
    </div>
  );
};
export default RadioInput;
