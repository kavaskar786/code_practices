import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-400 to-red-800">
      <div className="flex items-center justify-center  hover:scale-105 ">
        <div className="flex items-center justify-center gap-4 rounded-lg  shadow-lg  overflow-hidden px-4 py-2 border-2 mt-[10vh]">
          <FaSearch />
          <input
            type="text"
            className="focus:outline-none bg-transparent"
            placeholder="search anything"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
export default Search;
