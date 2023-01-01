import logo from '../assets/logo.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';

function Header() {
  return (
    <header className="w-[1210px] mx-auto flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <nav>
          <ul className="flex flex-row gap-[30px] text-white-100">
            <li className="p-[10px] cursor-pointer">Home</li>
            <li className="p-[10px] cursor-pointer">Product</li>
            <li className="p-[10px] cursor-pointer">Pricing</li>
            <li className="p-[10px] cursor-pointer">About</li>
            <li className="p-[10px] cursor-pointer">Contact</li>
          </ul>
        </nav>
        <img src={logo} className="p-[10px] ml-[25px] cursor-pointer" alt="logo do Figma Land" />
      </div>
      <div className="flex flex-row gap-6">
        <img src={twitter} className="w-[40px] cursor-pointer" alt="logo do twitter" />
        <img src={facebook} className="w-[40px] cursor-pointer" alt="logo do facebook" />
        <img src={linkedin} className="w-[40px] cursor-pointer" alt="logo do linkedin" />
      </div>
    </header>
  );
}

export default Header;
