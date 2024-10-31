import Category from "./category/Category";
import Color from "./colors/Color";
import Price from "./price/Price";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar w-2/12 fixed h-full border-r-2 border-gray-300 z-10	flex flex-col items-center	">
        <div className="logo-container mb-16">
          <h1 className="mt-6">🛒</h1>
        </div>
        <Category />
        <Color />
        <Price />
      </div>
    </div>
  );
};
export default Sidebar;
