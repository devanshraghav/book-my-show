import { useContext } from "react";
import { BiSearch, BiMenu, BiChevronDown, BiShareAlt } from "react-icons/bi";
import { headerLogo } from "../../utils/constants";

// Context
import MovieContext from "../Context/MovieContext";

const HeadSm = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className="text-white flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">{movie.original_title}</h3>
        </div>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const HeadLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3 w-1/2 ">
          <a href="/">
            <div className="w-17 h-10">
              <img src={headerLogo} className="w-full h-full" />
            </div>
          </a>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for Movies,Events,Plays,Sports and Activities"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-md flex items-center hover:text-white cursor-pointer">
            Dehradun <BiChevronDown />
          </span>
          <button className="bg-red-500 text-white px-2 py-1 text-sm rounded">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="absolute lg:relative bg-black inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:bg-bms-700 p-4">
        <div className="md:hidden">
          {/** Mobile devices */}
          <HeadSm />
        </div>
        <div className="hidden md:block lg:hidden">
          <HeadSm />
          {/** Medium/Tab devices */}
        </div>
        <div className="hidden lg:flex">
          {/** Large Screen */}
          <HeadLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
