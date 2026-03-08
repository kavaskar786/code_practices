export const YouTubeForm = () => {
  const { register } = useForm();

  const { name, ref, onChange, onBlur } = register("username");
  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="channel">Channel:</label>
      <input type="text" id="channel" name="channel" />

      <button type="submit">Submit</button>
    </form>
  );
};
