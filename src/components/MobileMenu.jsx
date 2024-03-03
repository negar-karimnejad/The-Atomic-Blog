/* eslint-disable react/prop-types */
function MobileMenu({ toggleMenu }) {
  return (
    <div
      className="w-8 h-8 flex items-center justify-center cursor-pointer"
      onClick={toggleMenu}
    >
      <div className="relative w-full h-[3px] rounded-lg bg-white">
        <div className="absolute bottom-2 w-full h-[3px] rounded-lg bg-white"></div>
        <div className="absolute top-2 w-full h-[3px] rounded-lg bg-white"></div>
      </div>
    </div>
  );
}

export default MobileMenu;
