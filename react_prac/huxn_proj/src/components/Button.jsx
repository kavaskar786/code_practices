const Button = ({ text, onClick, value, className }) => {
  // console.log(onClick);
  return (
    <button
      className={`text-white bg-cyan-500 px-4 py-2 rounded-md border-0 ${className}`}
      onClick={onClick}
      value={value}
    >
      {text}
    </button>
  );
};
export default Button;
