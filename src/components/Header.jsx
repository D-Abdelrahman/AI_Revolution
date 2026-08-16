import { useState } from "react";
import NavBar from "./NavBar";

const Header = () => {
  const [navAppear, setNavAppear] = useState(false);
  return (
    <header className="fixed z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      {/* <div className="abs absolute w-[50%] h-full bg-red-400"></div> */}
      <div className="container-custom flex justify-between items-center h-16">
        <span className="text-gradient text-2xl font-bold">AI Revolution</span>
        <button
          type="button"
          onClick={() => setNavAppear((prev) => !prev)}
          className="md:hidden hover:bg-gray-100 text-gray-400 hover:text-gray-500 p-2 rounded-md transition cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <NavBar navAppear={navAppear} />
      </div>
    </header>
  );
};

export default Header;
