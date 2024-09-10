import { Link } from 'react-router-dom';
import { useState } from 'react';

function Sidebar({ isSidebarHidden, toggleSidebar }) {
  const [isSubMenuHidden, setSubMenuHidden] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuHidden(!isSubMenuHidden);
  };

  return (
    <>
      {!isSidebarHidden && (
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 z-50">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <Link to="/" className="flex">
                <i className="fa-brands fa-nfc-symbol px-2 py-1 rounded-full bg-blue-500"></i>
                <h1 className="font-bold text-gray-200 text-[15px] ml-3">C.M.S</h1>
              </Link>
              <i
                className="fa-solid fa-xmark cursor-pointer ml-auto lg:hidden"
                onClick={() => toggleSidebar(true)} // Close sidebar on small devices
              ></i>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>

          {/* Sidebar links */}
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white">
            <i className="fa-regular fa-address-book"></i>
            <Link to="/contacts" className="text-[15px] ml-4 text-gray-200 font-bold">
              Contacts
            </Link>
          </div>

          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white">
            <i className="fa-solid fa-chart-line"></i>
            <Link to="/chartsmaps" className="text-[15px] ml-4 text-gray-200 font-bold">
              Charts and Maps
            </Link>
          </div>

          <div className="my-4 bg-gray-600 h-[1px]"></div>

          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
            onClick={toggleSubMenu}
          >
            <i className="fa-solid fa-circle-nodes"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">More Options</span>
              <span className={`text-sm ${isSubMenuHidden ? 'rotate-0' : ''}`} id="arrow">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
          </div>

          {/* Submenu */}
          <div
            className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
              isSubMenuHidden ? 'hidden' : ''
            }`}
          >
            <Link
              to="/some-other-page"
              className="block cursor-pointer p-2 hover:bg-white hover:text-black duration-300 rounded-md mt-1"
            >
              Option 1
            </Link>
            <Link
              to="/another-page"
              className="block cursor-pointer p-2 hover:bg-white hover:text-black duration-300 rounded-md mt-1"
            >
              Option 2
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
