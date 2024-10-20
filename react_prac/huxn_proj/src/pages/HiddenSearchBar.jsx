import { useRef, useState } from "react";
import InputText from "../components/InputText";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const bgColor = useRef("");
  const handleClick = (e) => {
    bgColor.current = "bg-black text-white ";
    if (`${e.target.className}`.split(" ")[0] === "wrapper") {
      setSearchBar(false);
      bgColor.current = "text-black bg-white";
    }
  };
  //   const handleHClick = () => {
  //     console.log("i am from the heading click");
  //   };
  return (
    <div
      onClick={handleClick}
      className={`wrapper h-svh ${bgColor.current} flex items-center justify-center`}
    >
      <div className="flex items-center justify-center gap-4">
        {searchBar && (
          <div className="text-black">
            <InputText
              value={searchInput}
              onChange={(val) => {
                setSearchInput(val);
              }}
            />
          </div>
        )}
        <p
          className=""
          onClick={() => {
            setSearchBar(true);
          }}
        >
          <FaSearch />
        </p>
      </div>
    </div>
  );
};
export default HiddenSearchBar;
