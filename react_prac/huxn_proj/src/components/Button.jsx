const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`text-white bg-cyan-500 px-4 py-2 rounded-md border-0 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
