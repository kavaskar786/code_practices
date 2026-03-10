const InputText = ({
  value,
  onChange,
  placeHolder = "Default placeHolder",
  name = "name",
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeHolder}
        className="px-4 py-2 rounded-md bg-slate-100"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
export default InputText;
