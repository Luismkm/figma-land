import logo from '../assets/logo.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';

import mobileMenu from '../assets/mobile_menu.svg';

function Header() {
  return (
    <header className="w-screen max-w-[1210px] mx-auto flex flex-row justify-center lg:justify-between px-2">
      <div className="flex flex-row justify-between md:justify-start items-center w-screen md:w-auto px-4">
        <nav className="hidden md:block">
          <ul className="flex flex-row gap-[30px] text-white-100">
            <li className="p-[10px] cursor-pointer">Home</li>
            <li className="p-[10px] cursor-pointer">Product</li>
            <li className="p-[10px] cursor-pointer">Pricing</li>
            <li className="p-[10px] cursor-pointer">About</li>
            <li className="p-[10px] cursor-pointer">Contact</li>
          </ul>
        </nav>
        <img src={logo} className="p-[10px] cursor-pointer" alt="logo do Figma Land" />
        <nav className="md:hidden">
          <img src={mobileMenu} alt="" />
        </nav>
      </div>
      <div className="hidden lg:flex flex-row gap-6">
        <img src={twitter} className="w-[40px] cursor-pointer" alt="logo do twitter" />
        <img src={facebook} className="w-[40px] cursor-pointer" alt="logo do facebook" />
        <img src={linkedin} className="w-[40px] cursor-pointer" alt="logo do linkedin" />
      </div>
    </header>
  );
}

export default Header;
