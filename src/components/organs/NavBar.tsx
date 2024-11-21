import { useState, useEffect } from "react";
import { Image } from "../atoms/Image";
import { Button } from "../atoms/Button";
import Logo from "../../assets/raaks_logo-removebg-preview.png";
import { NavLinks } from "../particles/DataLists";
import { List } from "../atoms/List";
import { Link } from "react-scroll"; 
import { ArrowCircleRight } from "@phosphor-icons/react";
import { Slide } from "react-awesome-reveal";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [navBarColor, setNavBarColor] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavBarColor(true) : setNavBarColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header className="w-full h-auto bg-transparent overflow-x-hidden fixed z-50 top-0 left-0">
      <Slide direction="down">
        <nav
          className={`w-full md:h-24 h-20 ${
            navBarColor ? "bg-white" : "bg-transparent"
          } lg:px-24 md:px-12 px-8 flex justify-between items-center`}
        >
          <Image
            as="a"
            href="/"
            className="md:h-28 h-10"
            image={Logo}
            alt="Logo"
          />
          <div className="lg:flex hidden items-center gap-20">
            <ul className="flex items-center justify-center gap-8">
              {NavLinks.map((navlink, index) => (
                <List className="w-full text-base" key={index}>
                  <Link
                    to={navlink.url}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-100} 
                    className="relative inline-block overflow-hidden pt-2 pl-2 before:w-2 before:h-2 before:bg-color2 before:absolute before:top-2 before:-left-10 before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0.5 after:w-0.5 after:h-3 after:bg-color2 after:absolute after:left-1 after:-top-10 hover:after:top-3.5 after:transition-all after:duration-200 after:ease-in cursor-pointer"
                  >
                    {navlink.name}
                  </Link>
                </List>
              ))}
            </ul>
          </div>
        </nav>
      </Slide>

      {/* Mobile Nav */}
      <nav
        className={`flex justify-end lg:hidden h-screen w-full bg-gray-950/90 fixed top-0 ${
          open ? "right-0" : "-right-[120vw]"
        } transition-all duration-500 ease-out`}
      >
        <div
          className={`w-[70%] h-screen bg-white flex flex-col justify-between items-center relative ${
            open ? "right-0" : "-right-[120vw]"
          } transition-all duration-500 ease-out delay-300`}
        >
          <section className="w-full px-4 py-6 flex flex-col gap-16">
            <div className="w-full flex justify-between items-center">
              <Image
                as="a"
                href="/"
                className="md:h-10 h-8"
                image={Logo}
                alt="Logo"
              />
              <div
                className="hamburger text-gray-950 cursor-pointer"
                onClick={handleToggle}
              >
                <ArrowCircleRight size={25} color="currentColor" weight="fill" />
              </div>
            </div>
            <ul className="flex flex-col gap-3 pl-2">
              {NavLinks.map((navlink, index) => (
                <List className="w-full text-base" key={index}>
                  <Link
                    to={navlink.url}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-100}
                    onClick={handleToggle}
                    className="relative overflow-hidden inline-block before:w-full before:h-0.5 before:bg-color2 before:absolute before:bottom-0 before:-left-full before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0 cursor-pointer"
                  >
                    {navlink.name}
                  </Link>
                </List>
              ))}
            </ul>
          </section>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
