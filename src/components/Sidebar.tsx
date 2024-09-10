import { Link } from 'react-router-dom';
import { useState } from 'react';

interface SidebarProps {
  isSidebarHidden: boolean;
  toggleSidebar: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarHidden, toggleSidebar }) => {
  const [isSubMenuHidden, setSubMenuHidden] = useState<boolean>(false);

  const toggleSubMenu = () => {
    setSubMenuHidden((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    // Close the sidebar when a link is clicked (on small screens)
    toggleSidebar(true);
  };

  return (
    <>
      {!isSidebarHidden && (
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-4 w-[280px] overflow-y-auto text-left bg-gradient-to-b from-gray-800 via-gray-900 to-black z-50 shadow-lg">
          {/* Sidebar Header */}
          <div className="text-white text-lg font-semibold">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center" onClick={handleLinkClick}>
                <i className="fa-brands fa-nfc-symbol text-2xl bg-blue-500 text-white p-2 rounded-full"></i>
                <h1 className="ml-3 font-bold text-2xl text-gray-200">C.M.S</h1>
              </Link>
              <i
                className="fa-solid fa-xmark text-xl cursor-pointer lg:hidden"
                onClick={() => toggleSidebar(true)} // Close sidebar on small devices
              ></i>
            </div>
            <div className="my-3 h-[2px] bg-gray-700"></div>
          </div>

          {/* Sidebar Links */}
          <div className="space-y-4">
            {/* Contacts Link */}
            <div
              className="p-3 flex items-center rounded-md transition duration-300 cursor-pointer hover:bg-blue-600 text-white"
              onClick={handleLinkClick}
            >
              <i className="fa-regular fa-address-book text-lg"></i>
              <Link to="/" className="ml-4 font-medium text-lg">
                Contacts
              </Link>
            </div>

            {/* Charts and Maps Link */}
            <div
              className="p-3 flex items-center rounded-md transition duration-300 cursor-pointer hover:bg-blue-600 text-white"
              onClick={handleLinkClick}
            >
              <i className="fa-solid fa-chart-line text-lg"></i>
              <Link to="/chartsmaps" className="ml-4 font-medium text-lg">
                Charts and Maps
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-[1px] bg-gray-700"></div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
