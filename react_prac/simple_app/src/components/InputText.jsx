const InputText = ({ value, onChange, name, type, placeholder, className }) => {
  console.log(value);
  return (
    <input
      value={value}
      className={className}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};
export default InputText;
