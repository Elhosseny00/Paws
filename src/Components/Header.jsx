import { Link, NavLink } from "react-router-dom";
import '../Style/header.css'
export default function Header() {
  const navLinks = [
    {
      linkName: "Home",
      to: "/",
    },
    {
      linkName: "Pets List",
      to: "/petslist",
    },
    {
      linkName: "Shop",
      to: "/shop",
    },
    {
      linkName: "Services",
      to: "/services",
    },
    {
      linkName: "Contact",
      to: "/contact",
    },
  ];
  const socilaIcons = [
    {
      iconName: "fa-brands fa-facebook-f",
    },
    {
      iconName: "fa-brands fa-twitter",
    },
    {
      iconName: "fa-brands fa-instagram",
    },
  ];
  return (
    <header className="w-[100%] bg-whiteColor z-[1000]">
      <div className="container  h-[60px] flex items-center justify-between gap-[30px] sm:gap-0">
        <div className="flex items-center gap-[100px]">
          <Link to={"/"} className="flex items-center">
            <h2 className=" text-redColor font-semibold text-[30px]">Paws</h2>
            <img
              className="w-[25px] h-[25px]"
              src={require("../Images/logo.png")}
              alt="logo"
            />
          </Link>
          <nav>
            <div className="navlinks">
              <ul className="mianlinks flex gap-[30px]">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      className="text-blackColor font-semibold text-[15px]"
                      to={link.to}
                    >
                      {link.linkName}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <ul className=" flex gap-[30px] ">
          {socilaIcons.map((icon, index) => (
            <li
              key={index}
              className="text-redColor transition-colors duration-500 hover:text-greenColor"
            >
              <Link>
                <i className={icon.iconName}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
