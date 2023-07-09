import {
  BiChevronRight,
  BiSearch,
  BiMenu,
  BiChevronDown,
} from "react-icons/bi";

import { headerLogo } from "../../utils/constants";

const HeadSm = () => {
  return (
    <>
      <div className="text-white flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">It All starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Dehradun <BiChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const HeadMd = () => {
  return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for Movies,Events,Plays,Sports and Activities"
      />
    </div>
  );
};
const HeadLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3 w-1/2 ">
          <a href="/">
            <div className="w-17 h-10">
              <img
                src={headerLogo}
                className="w-full h-full"
              />
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

const Header = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="md:hidden">
          {/** Mobile devices */}
          <HeadSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          <HeadMd />
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

export default Header;
