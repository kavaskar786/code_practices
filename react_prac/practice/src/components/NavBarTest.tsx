const NavBarTest = () => {
  return (
    <div className="bg-[#00000094]">
      <nav className="flex items-center justify-around h-16 w-full gap-[50%]">
        <div className="">
          <div className="logo cursor-pointer font-semibold	text-white">
            START BOOTSTRAP
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 text-[#9e8982]">
          <button className="">SIGN UP</button>
          <button className="">LOG IN</button>
        </div>
      </nav>
    </div>
  );
};
export default NavBarTest;
