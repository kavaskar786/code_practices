const RadioInput = ({
  handleChange,
  value,
  title,
  name,
  color = "bg-white",
}) => {
  return (
    <div>
      <label className="side-label-container  block relative	pl-9 mb-3 cursor-pointer select-none">
        <input
          type="radio"
          name={name}
          className="absolute opacity-0 cursor-pointer"
          onChange={handleChange}
          value={value}
        />
        <span
          className={`checkmark absolute top-0 left-0 h-5 w-5 rounded-full bg- ${color}`}
        ></span>
        {title}
      </label>
    </div>
  );
};
export default RadioInput;
