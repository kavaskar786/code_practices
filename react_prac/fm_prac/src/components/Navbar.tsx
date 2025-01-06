import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = ["/", "Gestrues", "Loading", "Animation", "Stagger"];
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-400 h-[8vh] w-[100%] flex items-center justify-center text-white">
      <div className={` flex items-center justify-between w-[90%] mx-auto  `}>
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
    </div>
  );
};
export default Navbar;
