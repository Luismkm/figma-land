import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import location from '../assets/location.svg';
import mobile from '../assets/mobile.svg';

function Footer() {
  return (
    <footer className="w-full xl:w-[1777px] py-[150px] bg-gray-500 mt-[102px]">
      <div className="lg:flex justify-center text-center lg:text-start gap-[73px] lg:gap-5">
        <div className="flex flex-col md:flex-row items-center md:justify-around lg:justify-center gap-10 md:gap-0 lg:gap-10">
          <nav className="w-[186px] h-[267px] text-white-100">
            <ul className="text-[0.9375rem]">
              <li className="text-xl font-bold first:mb-[25px] mb-[16px] last:mb[0px]">
                Pages
              </li>
              <li className="text-xl first:mb-[25px] mb-[16px] last:mb[0px]">
                Home
              </li>
              <li className="text-xl first:mb-[25px] mb-[16px] last:mb[0px]">
                Product
              </li>
              <li className="text-xl first:mb-[25px] mb-[16px] last:mb[0px]">
                Pricing
              </li>
              <li className="text-xl first:mb-[25px] mb-[16px] last:mb[0px]">
                About
              </li>
              <li className="text-xl first:mb-[25px] mb-[16px] last:mb[0px]">
                Contact
              </li>
            </ul>
          </nav>

          <nav className="w-[186px] h-[267pxx] text-white-100">
            <ul className="text-[0.9375rem]">
              <li className="text-xl font-bold mb-[25px]">
                Tomothy
              </li>
              <li className="text-xl first:mb-[25px] mb-[16px] last:mb[0px]">
                Eleanor Edwards
              </li>
              <li className="text-xl first:mb-[25px] mb-[16px] last:mb[0px]">
                Ted Robertson
              </li>
              <li className="text-xl first:mb-[25px] mb-[16px] last:mb[0px]">
                Annette Russell
              </li>
              <li className="text-xl first:mb-[25px] mb-[16px] last:mb[0px]">
                Jennie Mckinney
              </li>
              <li className="text-xl first:mb-[25px] mb-[16px] last:mb[0px]">
                Gloria Richards
              </li>
            </ul>
          </nav>

          <nav className="w-[186px] h-[267pxx] text-white-100">
            <ul className="text-[0.9375rem]">
              <li className="text-xl font-bold mb-[25px]">
                Jane Black
              </li>
              <li className="text-xl first:mb-[25px] mb-[16px] last:mb[0px]">
                Philip Jones
              </li>
              <li className="text-xl first:mb-[25px] mb-[16px] last:mb[0px]">
                Product
              </li>
              <li className="text-xl first:mb-[25px] mb-[16px] last:mb[0px]">
                Colleen Russell
              </li>
              <li className="text-xl first:mb-[25px] mb-[16px] last:mb[0px]">
                Marvin Hawkins
              </li>
              <li className="text-xl first:mb-[25px] mb-[16px] last:mb[0px]">
                Bruce Simmmons
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-col items-center md:justify-around md:items-baseline gap-12 text-white-100 mt-10 xl:ml-[125px]">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-[10px] mb-[10px]">
              <img src={location} alt="" />
              <p className="text-center mt-[10px]">
                7480 Mockingbird Hill undefined
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={mobile} alt="" />
              <span className="text-center mt-[10px]">
                (239) 555-0108
              </span>
            </div>
          </div>
          <div className="flex xl:justify-start gap-6 py-[30px]">
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
