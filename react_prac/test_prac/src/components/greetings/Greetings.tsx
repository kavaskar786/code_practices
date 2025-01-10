const Greetings = ({ name = "kavaskar" }: { name?: string }) => {
  return (
    <div>
      <p>hello {name}</p>
    </div>
  );
};
export default Greetings;
