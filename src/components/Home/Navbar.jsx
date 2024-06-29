import { NavLink } from "react-router-dom";

const Navbar = () => {
  const handleContactClick = () => {
    window.open("mailto:theshubhamkumr@gmail.com");
  };

  return (
    <nav className="relative z-10 flex justify-center items-center mt-5 animate-fadeIn mb-10">
      <div className="absolute inset-0 bg-blue-500 opacity-50 rounded-full filter blur-3xl shadow-lg"></div>
      <div className="relative z-20 items-center border border-r-1 rounded-full border-zinc-900 hover:shadow-lg">
        <div className="bg-black bg-opacity-80 rounded-full pl-2 pr-6 py-1.5 flex items-center space-x-8">
          <div className="text-xl font-medium">
            <NavLink
              to="/"
              className="w-8 h-8 bg-gradient-to-r from-blue-500 via-indigo-300 to-violet-400 rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <span className="sr-only">Home</span>
            </NavLink>
          </div>
          <div className="space-x-4 text-gray-600">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300"
                  : "hover:text-gray-300 hover:shadow-xl transition-shadow duration-300"
              }
            >
              Projects
            </NavLink>
            <button
              onClick={handleContactClick}
              className="hover:text-gray-300 hover:shadow-xl transition-shadow duration-300"
            >
              📧Contact@Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
