import NavBarTest from "./NavBarTest";

const Home = () => {
  return (
    <div className="h-[88vh] bg-gradient-to-b from-[#f11b70] to-[#fe6b00] overflow-hidden	">
      <NavBarTest />
      <div className="flex items-center justify-center flex-col h-[79vh] gap-14">
        <div className="flex items-center justify-center flex-col gap-6">
          <h1 className="text-white text-8xl font-bold">One Page Wonder</h1>{" "}
          <p className="text-white text-6xl font-bold">
            Will Rock Your Socks Off
          </p>
        </div>
        <div className="">
          <button className="text-white py-6 px-12 bg-[#ee0879] rounded-full">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
