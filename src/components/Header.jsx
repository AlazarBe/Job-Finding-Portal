import { NavLink } from "react-router";
import { Link } from "react-router";

const navLinks = [
  {
    name: "Home",
    to: "/",
    style: "hover:text-blue-500 transition-colors duration-200",
  },
  {
    name: "Jobs",
    to: "/jobs",
    style: "hover:text-blue-500 transition-colors duration-200",
  },
  {
    name: "About",
    to: "/about",
    style: "hover:text-blue-500 transition-colors duration-200",
  },
  {
    name: "Contact Us",
    to: "/contact",
    style: "hover:text-blue-500 transition-colors duration-200",
  },
  {
    name: "Login",
    to: "/login",
    style: "hover:text-blue-500 transition-colors duration-200",
  },
  {
    name: "Register",
    to: "/register",
    style:" hover:bg-green-500 font-bold bg-green-400 p-2 px-4 transition-colors duration-200"
  },
];

function Header() {
  return (
    <div className="relative z-100 w-6xl mx-auto flex justify-between p-2 items-center">
      <h1 className="font-bold text-3xl font-secondary">Job Portal</h1>
      <div className="sm:hidden md:block">
        <nav>
          <ul className="flex gap-4 items-center">
            {navLinks.map((link) => (
              <li key={link.name} className={link.style}>
                <NavLink
                  className={({ isActive }) => (isActive ? "underline" : "")}
                  to={link.to}
                >
                 {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
