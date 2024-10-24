import Button from "../components/Button";

const Recommended = () => {
  return (
    <>
      <div className="">
        <h2 className="ml-80 my-5 text-xl	">Recommended</h2>
        <div className="recommended-btns flex gap-2 ml-80 ">
          <Button text="All Products" />
          <Button text="Nike" />
          <Button text="Adidas" />
          <Button text="Puma" />
          <Button text="Vans" />
        </div>
      </div>
    </>
  );
};
export default Recommended;
