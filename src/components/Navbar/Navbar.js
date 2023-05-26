import styles from "./Navbar.module.scss";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const handleScroll = (target) => {
    scroll.scrollTo(target, {
      duration: 300,
      smooth: 'easeInOutQuart',
      offset: 50,
    });
  };

  const handleMenuClick = () => {
    setOpenNav(!openNav);
  };

  const navItems = [
    { id: "home", label: "home" },
    { id: "about", label: "about" },
    { id: "portfolio", label: "portfolio" },
    { id: "contact", label: "contact" },
  ];

  const navList = (
    <ul className={`${styles.navList} mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6`}>
      {navItems.map((item) => (
        <li key={item.id}>
          <Link
            to={item.id}
            spy={true}
            smooth={true}
            duration={300} 
            offset={50}
            activeClass={styles.active}
            onSetActive={handleSetActive}
            onClick={() => handleScroll(item.id)}
            className={`${styles.link} flex items-center`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={`${styles.navbar} w-full max-w-6xl sticky top-0 z-10 h-max rounded-none py-2 px-4 lg:px-8 lg:py-6`}>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <button
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={handleMenuClick}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {openNav && <div>{navList}</div>}
    </nav>
  );
}
