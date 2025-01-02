import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = ["/", "Gestrues", "Loading", "Animation"];
  return (
    <div
      className={`relative flex items-center justify-between w-[90%] mx-auto h-[8vh]`}
    >
      <div className="logo text-3xl">Kavaskar's</div>
      <nav className="flex items-center justify-center gap-4">
        {navItems.map((item, index) => (
          <NavLink to={item} key={index}>
            <div>{item === "/" ? "FlipCard" : item}</div>
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center justify-center gap-4">
        <button>Sign up</button>
        <button>Login</button>
      </div>
    </div>
  );
};
export default Navbar;
