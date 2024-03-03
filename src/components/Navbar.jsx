import { useState } from "react";
import DropdownLink from "./DropdownLink";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

function Navbar() {
  const [isShow, setIsShow] = useState(false);

  const toggleMenu = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div className="absolute z-50 w-full right-0 top-0 md:px-20 px-10 py-12 flex items-center justify-between">
      <Logo />
      <NavLink />

      {/* Mobile Menu */}
      <div className="relative md:hidden">
        <MobileMenu toggleMenu={toggleMenu} />
        {isShow && <DropdownLink />}
      </div>
    </div>
  );
}

export default Navbar;
