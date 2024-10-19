const Navbar = () => {
  return (
    <div className="h-1/6 ">
      <div className="bg-fuchsia-900">
        <nav className="list-none text-white flex justify-between items-center mx-5">
          <div className="logo flex justify-center items-center gap-2">
            <img src={logo} alt="Logo" className="h-8 w-8 rounded-md" />
            <p>My Task App</p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <li className="px-4 py-2 h-12 rounded-2xl">
              <a href="">Home</a>
            </li>
            <li className="px-4 py-2 h-12 rounded-2xl">
              <a href="">Tasks</a>
            </li>
            <li className="px-4 py-2 h-12 rounded-2xl">
              <a href="">Remainder</a>
            </li>
            <li className="px-4 py-2 h-12 rounded-2xl">
              <a href="">About</a>
            </li>
          </div>
          <div className="right_part flex justify-center items-center gap-2 text-xl	">
            <a href="">
              <p>
                <MdAccountCircle />
              </p>
            </a>
            <a href="">
              <p>
                <IoMdSettings />
              </p>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
