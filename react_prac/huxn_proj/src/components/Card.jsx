import { AiFillStar } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
const Card = () => {
  return (
    <div>
      {" "}
      <section className="card m-5 border-2 border-solid border-gray-300 p-5 cursor-pointer">
        <img
          src="https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg"
          alt="Shoe"
          className="w-52 mb-4 "
        />
        <div className="card-derails">
          <h3 className="card-title mb-4"></h3>
          <section className="card-reviews mb-4 flex">
            <div className="flex">
              <AiFillStar className="text-amber-200" />{" "}
              <AiFillStar className="text-amber-200" />{" "}
              <AiFillStar className="text-amber-200" />{" "}
              <AiFillStar className="text-amber-200" />
            </div>
            <span className="total-reviews text-sm ml-3">5</span>
          </section>
          <div className="price flex justify-around items-center">
            <del>$300</del> 200
            <FaShoppingBag className="text-gray-400" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Card;
