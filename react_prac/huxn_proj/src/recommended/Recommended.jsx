import Button from "../components/Button";

const Recommended = ({ handleClick }) => {
  // console.log(handleClick);
  return (
    <>
      <div className="">
        <h2 className="ml-80 my-5 text-xl	">Recommended</h2>
        <div className="recommended-btns flex gap-2 ml-80 ">
          <Button text="All Products" onClick={handleClick} value="" />
          <Button text="Nike" onClick={handleClick} value="Nike" />
          <Button text="Adidas" onClick={handleClick} value="Adidas" />
          <Button text="Puma" onClick={handleClick} value="Puma" />
          <Button text="Vans" onClick={handleClick} value="Vans" />
        </div>
      </div>
    </>
  );
};
export default Recommended;
