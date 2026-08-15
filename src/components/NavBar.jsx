const sections = [
  { name: "Home", href: "home" },
  { name: "AI Types", href: "types" },
  { name: "Benefits", href: "benefits" },
  { name: "Contact", href: "contact" },
];

const NavBar = ({ navAppear }) => {
  return (
    <>
      <nav
        className={` ${!navAppear ? "hidden" : ""} absolute md:relative top-full md:top-0 left-0 md:flex items-center w-full md:w-fit bg-white shadow-lg text-sm md:shadow-none rounded-b-lg`}
      >
        <ul className="flex flex-col md:flex-row ml-auto">
          {sections.map((section, i) => (
            <li key={i} className="">
              <a
                href={section.href}
                className="block p-2 mx-2 md:mx-3 lg:mx-4.5 mt-1 md:mt-0 hover:bg-gray-100 md:hover:bg-transparent text-gray-500 hover:text-indigo-500 capitalize rounded-lg"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="w-full md:w-fit">
          <a href="#" className="block mx-2 mb-2.5 md:m-0 btn-primary">
            Get Started
          </a>
        </button>
      </nav>
    </>
  );
};

export default NavBar;
