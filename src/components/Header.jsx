import { useState } from "react";

const Header = () => {
  const sections = ["home", "AI types", "benefits", "contact"];
  const [navAppear, setNavAppear] = useState({
    lgScreen: false,
    barsClicked: false,
  });
  return (
    <header className="shadow-md py-3 bg-white/98 fixed right-0 left-0">
      <div className="container-custom flex justify-between items-center">
        <div className="text-2xl font-bold">AI Revolution</div>
        <div
          onClick={() => (navAppear ? setNavAppear(false) : setNavAppear(true))}
          className="md:hidden hover:bg-gray-100 text-gray-400 p-2 rounded-md transition duration-300 cursor-pointer"
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
        </div>

        <nav
          className={` ${!navAppear ? "hidden" : ""}  absolute md:relative top-full left-0 md:flex items-center w-full md:w-fit bg-light`}
        >
          <ul className="flex flex-col md:flex-row ml-auto">
            {sections.map((section, i) => (
              <li key={i} className="">
                <a
                  href={`#${section}`}
                  className="block p-2 mx-3 lg:mx-4.5 mt-2 md:mt-0 hover:bg-gray-100 md:hover:bg-transparent text-gray-500 hover:text-indigo-500 capitalize rounded-lg"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
          <button className="w-full md:w-fit">
            <a
              href="#"
              className="block m-3 md:m-0 py-1.5 px-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg"
            >
              Get Started
            </a>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
