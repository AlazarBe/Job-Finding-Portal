import { NavLink } from "react-router";
import { Link } from "react-router";

const navLinks = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Jobs",
    to: "/jobs",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Contact Us",
    to: "/contact",
  },
  {
    name: "Login",
    to: "/login",
  },
  {
    name: "Register",
    to: "/register",
  },
];

function Header() {
  return (
    <div className="w-6xl mx-auto flex justify-between mt-3 items-center">
      <h1 className="font-bold text-3xl">Job Portal</h1>
      <div>
        <nav>
          <ul className="flex gap-4">
            {navLinks.map((link) => (
              <li key={link.name} className="hover:text-blue-500 transition-colors duration-200">
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
