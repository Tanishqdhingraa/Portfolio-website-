import React, { useEffect, useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { LINKS } from "../benson-langford-assets-main/constants/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'visible';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  const delays = ["delay-100", "delay-200", "delay-300", "delay-400", "delay-500"];

  return (
    <>
      <nav className="fixed right-4 top-4 z-50 p-4">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="h-6 w-6 hover:text-amber-400" />
          ) : (
            <FaBars className="h-6 w-6 hover:text-lime-400" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-black text-white z-40">
          <ul>
            {LINKS.map((link, index) => (
              <li
                key={link.id}
                className={`transform transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'} ${delays[index % delays.length]}`}
              >
                <a
                  href={`#${link.id}`}
                  onClick={toggleMenu}
                  className={`text-5xl font-semibold uppercase tracking-wide lg:text-9xl transition-colors duration-300 ease-in-out ${
                    index % 2 === 0 ? 'hover:text-lime-400' : 'hover:text-amber-400'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
