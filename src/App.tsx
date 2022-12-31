import logo from './assets/logo.svg';

import twitter from './assets/twitter.svg';
import facebook from './assets/facebook.svg';
import linkedin from './assets/linkedin.svg';

import twitterBlueIcon from './assets/twitter_blue.svg';
import facebookBlueIcon from './assets/facebook_blue.svg';
import linkedinBlueIcon from './assets/linkedin_blue.svg';

import drawing from './assets/drawing.svg';
import draw from './assets/draw.svg';
import brush from './assets/brush.svg';

import video from './assets/video.png';

import macbook from './assets/macbook.png';
import newsletter from './assets/newsletter.svg';

import amazon from './assets/amazon.svg';
import google from './assets/google.svg';
import uber from './assets/uber.svg';
import dropbox from './assets/dropbox.svg';
import microsoft from './assets/microsoft.svg';

import avatar from './assets/avatar.png';
import ibm from './assets/ibm.svg';

import locationBlue from './assets/location_blue.svg';
import email from './assets/email.svg';
import mobileBlue from './assets/mobile_blue.svg';

import location from './assets/location.svg';
import mobile from './assets/mobile.svg';

function App() {
  return (
    <>
      <div className="w-screen h-[930px] bg-people bg-center bg-no-repeat flex flex-col items-center">
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
        <section className="w-[826px] h-[335px] flex flex-col justify-center items-center">
          <h1 className="graphik font-bold text-[4.625rem] text-white-100 leading-[84px] mt-[110px] text-center block">
            The best products
            start with Figma
          </h1>
          <h4 className="text-[1.75rem] text-center text-white-100 mt-[17px] p-[10px] inline-block">
            Most calendars are designed for teams. Slate is designed
            for freelancers
          </h4>
        </section>
        <div className="p-5 w-[276px] h-[92px] mt-[40px]">
          <button className="w-[236px] h-[52px] bg-blue-500 rounded-[35px] text-white-100 text-xl text-center" type="button">
            Try For Free
          </button>
        </div>
      </div>

      <section className="w-screen h-[1361px] mt-[112px] flex flex-col items-center">
        <div>
          <h3 className="text-5xl tracking-[0.2px] text-gray-500 text-center mb-[17px]">Features</h3>
          <p className="text-gray-400 text-[1.75rem] leading-[40px] tracking-[0.2px] text-center">
            Most calendars are designed for teams.
            <br />
            Slate is designed for freelancers
          </p>
        </div>
        <div className="w-[869px] h-[257px] grid grid-cols-3 gap-[52px] mt-20">
          <div className="flex flex-col justify-start items-center">
            <img src={drawing} className="w-[45px] h-[45px]" alt="um circulo e um quadrado azul" />
            <h3 className="text-xl text-center text-gray-500 font-bold my-[20px] leading-7">
              OpenType features
              Variable fonts
            </h3>
            <p className="text-lg text-gray-400 leading-[25px] tracking-[0.2px] text-center px-[10px]">
              Slate helps you see how
              many more days you need
              to work to reach your
              financial goal.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <img src={draw} className="w-[45px] h-[45px]" alt="lápis azul" />
            <h3 className="text-xl text-center text-gray-500 font-bold my-[20px] leading-7">
              Design with real data
            </h3>
            <p className="text-lg text-gray-400 leading-[25px] tracking-[0.2px] text-center px-[10px]">
              Slate helps you see how
              many more days you need
              to work to reach your
              financial goal.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <img src={brush} className="w-[45px] h-[45px]" alt="pincel azul" />
            <h3 className="text-xl text-center text-gray-500 font-bold my-[20px] leading-7">
              Fastest way to
              take action
            </h3>
            <p className="text-lg text-gray-400 leading-[25px] tracking-[0.2px] text-center px-[10px]">
              Slate helps you see how
              many more days you need
              to work to reach your
              financial goal.
            </p>
          </div>
        </div>
        <div className="mt-20">
          <img src={video} alt="" />
        </div>
        <div className="w-[100%] py-[226px] flex justify-center">
          <div>
            <h3 className="text-5xl text-gray-500 leading-[55px] tracking-[0.2px]">
              Fastest way to
              <br />
              organize
            </h3>
            <p className="text-[28px] leading-10 mt-[17px] mb-[70px] py-[10px] text-gray-400">
              Most calendars are designed for teams.
              <br />
              Slate is designed for freelancers
            </p>
            <button className="w-[236px] h-[52px] bg-blue-500 rounded-[35px] text-white-100 text-xl font-bold text-center" type="button">
              Try For Free
            </button>
          </div>
          <img src={macbook} alt="Macbook" />
        </div>
        <div className="w-[100%] pt-[150px] pb-[173px] flex justify-center">
          <img src={newsletter} alt="imagen de envelope aberto com papéis" />
          <div className="pl-[123px] flex flex-col justify-center">
            <strong className="text-xl font-bold text-gray-500">
              At your fingertips
            </strong>
            <h3 className="leading-[55px] text-5xl tracking-[0.2px] text-gray-500 mt-[17px] mb-[25px]">
              Lightning fast
              <br />
              prototyping
            </h3>
            <p className="text-gray-400 tracking-[0.2px] text-lg">
              <span className="font-bold text-xl text-gray-500">
                Subscribe to our Newsletter
              </span>
              <br />
              Available exclusivery on Figmaland
            </p>
            <div className="py-9">
              <form>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-[273px] h-[54px] rounded-[56px] py-[19px] pl-[39px] mr-3 bg-white-500 border-[1px] border-white-600 outline-none placeholder:text-sm"
                />
                <button
                  type="submit"
                  className="bg-blue-500 w-[172px] h-[58px] rounded-[35px] text-white-100 text-xl"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <section className="flex flex-col justify-center items-center pb-[80px]">
          <h3 className="text-5xl tracking-[0.2px] text-gray-500 text-center mb-[17px]">
            Partners
          </h3>
          <p className="text-[1.75rem] leading-10 text-center tracking-[0.2px] text-gray-400 mt-[17px] mb-[90px]">
            Most calendars are designed for teams.
            <br />
            Slate is designed for freelancers
          </p>
          <div className="grid grid-cols-[273px,273px,302px,220px] h-[165px] w-[1075px]">
            <img src={google} className="border-[1px] border-solid border-white-600 px-[40px] h-[165px]" alt="" />
            <img src={amazon} className="border-[1px] border-solid border-white-600 px-[40px] h-[165px]" alt="" />
            <img src={microsoft} className="border-[1px] border-solid border-white-600 px-[40px] h-[165px]" alt="" />
            <img src={uber} className="border-[1px] border-solid border-white-600 px-[40px] h-[165px]" alt="" />
          </div>
          <div className="grid grid-cols-[309px,273px,220px,273px] h-[165px] w-[1075px] mb-[80px]">
            <img src={dropbox} className="border-[1px] border-solid border-white-600 px-[40px] h-[165px]" alt="" />
            <img src={google} className="border-[1px] border-solid border-white-600 px-[40px] h-[165px]" alt="" />
            <img src={uber} className="border-[1px] border-solid border-white-600 px-[40px] h-[165px]" alt="" />
            <img src={amazon} className="border-[1px] border-solid border-white-600 px-[40px] h-[165px]" alt="" />
          </div>
          <button className="w-[236px] h-[52px] bg-blue-500 rounded-[35px] text-white-100 text-xl text-center font-bold" type="button">
            Try For Free
          </button>
        </section>
        <section className="flex flex-col items-center h-[810px] mt-[110px] mb-[100px]">
          <h3 className="text-5xl tracking-[0.2px] text-gray-500 text-center mb-[17px]">Testimonials</h3>
          <img src={ibm} alt="logo IBM" className="mt-[80px] mb-[60px]" />
          <p className="text-[1.75rem] leading-10 text-center tracking-[0.2px] text-gray-400">
            Most calendars are designed for teams. Slate is designed for freelancers
            <br />
            who want a simple way to plan their schedule.
          </p>
          <div className="flex mt-[53px] mb-[83px]">
            <img src={avatar} alt="" className="mr-[13px]" />
            <div className="flex flex-col">
              <span>Organize across</span>
              <span>Ui designer</span>
            </div>
          </div>
          <button className="w-[276px] h-[62px] bg-blue-500 rounded-[35px] text-white-100 text-xl font-bold text-center" type="button">
            More Testimonials
          </button>
        </section>

        <section className=" flex flex-col justify-center w-[1777px] bg-gray-500 py-[100px]">
          <h3 className="text-5xl tracking-[0.2px] text-white-100 text-center mb-[17px] p-[10px]">Pricing</h3>
          <p className="text-[1.75rem] leading-10 text-center tracking-[0.2px] text-white-100">
            Most calendars are designed for teams.
            <br />
            Slate is designed for freelancers
          </p>
          <div className="flex justify-center items-center gap-[50px] mt-20">
            <div className="flex flex-col justify-center items-center p-10 bg-white-100 w-[335px] h-[607px] rounded-[10px] border-[1px] border-white-700 shadow-[0px_13px_19px_rgba(0,0,0,0.7)]">
              <strong className="text-gray-500 text-xl font-bold block mb-[6px]">
                FREE
              </strong>
              <span className="leading-[23px] text-gray-400 text-center">
                Organize across all
                <br />
                apps by hand
              </span>
              <div className="flex items-center py-[30px]">
                <span className="text-gray-500 text-[4.625rem] font-bold mr-[10px]">
                  0
                </span>
                <span className="text-gray-400">
                  <span className="block text-gray-500 text-xl font-bold">$</span>
                  Per Month
                </span>
              </div>
              <ul className="mb-[30px]">
                <li className="mt-[10px] text-gray-500 text-[0.9375rem]">Pricing Feature</li>
                <li className="mt-[10px] text-gray-500 text-[0.9375rem]">Pricing Feature</li>
                <li className="mt-[10px] text-gray-500 text-[0.9375rem]">Pricing Feature</li>
                <li className="mt-[10px] text-gray-500 text-[0.9375rem]">Pricing Feature</li>
                <li className="mt-[10px] text-gray-500 text-[0.9375rem]">Pricing Feature</li>
              </ul>
              <button className="w-[255px] h-[56px] bg-blue-500 rounded-[35px] text-white-100 text-xl text-center" type="button">
                Order Now
              </button>
            </div>

            <div className="flex flex-col items-center bg-blue-500 py-[86px] px-10 h-[693px] rounded-[10px] border-[1px] border-white-700 shadow-[0px_13px_19px_rgba(0,0,0,0.7)]">
              <strong className="text-white-100 text-xl block mb-[6px]">
                STANDARD
              </strong>
              <span className="leading-[23px] text-white-100 text-center">
                Organize across all
                <br />
                apps by hand
              </span>
              <div className="flex items-center py-[30px] text-white-100">
                <span className=" text-[4.625rem] font-bold mr-[10px]">
                  10
                </span>
                <span>
                  <span className="block text-xl font-bold">$</span>
                  Per Month
                </span>
              </div>
              <ul className="mb-[30px]">
                <li className="mt-[10px] text-white-100 text-[0.9375rem]">Pricing Feature</li>
                <li className="mt-[10px] text-white-100 text-[0.9375rem]">Pricing Feature</li>
                <li className="mt-[10px] text-white-100 text-[0.9375rem]">Pricing Feature</li>
                <li className="mt-[10px] text-white-100 text-[0.9375rem]">Pricing Feature</li>
                <li className="mt-[10px] text-white-100 text-[0.9375rem]">Pricing Feature</li>
              </ul>
              <button className="w-[255px] h-[56px] bg-white-100 rounded-[35px] text-blue-500 text-xl text-center" type="button">
                Order Now
              </button>
            </div>

            <div className="flex flex-col justify-center items-center p-10 bg-white-100 w-[335px] h-[607px] rounded-[10px] border-[1px] border-white-700 shadow-[0px_13px_19px_rgba(0,0,0,0.7)]">
              <strong className="text-gray-500 text-xl font-bold block mb-[6px]">
                BUSINESS
              </strong>
              <span className="leading-[23px] text-gray-400 text-center">
                Organize across all
                <br />
                apps by hand
              </span>
              <div className="flex items-center py-[30px]">
                <span className="text-gray-500 text-[4.625rem] font-bold mr-[10px]">
                  99
                </span>
                <span className="text-gray-400">
                  <span className="block text-gray-500 text-xl font-bold">$</span>
                  Per Month
                </span>
              </div>
              <ul className="mb-[30px]">
                <li className="mt-[10px] text-gray-500 text-[0.9375rem]">Pricing Feature</li>
                <li className="mt-[10px] text-gray-500 text-[0.9375rem]">Pricing Feature</li>
                <li className="mt-[10px] text-gray-500 text-[0.9375rem]">Pricing Feature</li>
                <li className="mt-[10px] text-gray-500 text-[0.9375rem]">Pricing Feature</li>
                <li className="mt-[10px] text-gray-500 text-[0.9375rem]">Pricing Feature</li>
              </ul>
              <button className="w-[255px] h-[56px] bg-blue-500 rounded-[35px] text-white-100 text-xl text-center" type="button">
                Order Now
              </button>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-5xl tracking-[0.2px] text-gray-500 mt-[203px] text-center mb-[17px] p-[10px]">Contact Us</h3>
          <p className="text-[1.75rem] leading-10 text-center tracking-[0.2px] text-gray-400 mb-[60px]">
            Most calendars are designed for teams.
            <br />
            Slate is designed for freelancers
          </p>
          <div className="flex gap-[50px]">
            <div>
              <div className="flex flex-col py-[52px] items-center w-[453px] h-[669px] border-[1px] border-[#DDD] rounded-[20px] shadow-[0px_13px_19px_rgba(0,0,0,0.7)]">
                <strong className="text-xl block mb-[45px]">
                  Contact Us
                </strong>
                <form className="flex flex-col gap-[45px]">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-[353px] h-[54px] rounded-[56px] py-[19px] pl-[39px] mr-3 bg-white-500 border-[1px] border-white-600 outline-none placeholder:text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="w-[353px] h-[54px] rounded-[56px] py-[19px] pl-[39px] mr-3 bg-white-500 border-[1px] border-white-600 outline-none placeholder:text-sm"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="w-[353px] min-h-[193px] py-[23px] pl-[20px] resize-none mr-3 bg-white-500 border-[1px] border-white-600 outline-none placeholder:text-sm"
                  />
                  <button className="w-[145px] h-[56px] bg-blue-500 rounded-[35px] text-white-100 text-xl text-center" type="button">
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col items-center">
                <div className="flex my-[28px]">
                  <div className="flex flex-col items-center">
                    <img src={locationBlue} alt="" />
                    <p className="text-center mt-[10px]">
                      6386 Spring St undefined Anchorage,
                      <br />
                      Georgia 12473 United States
                    </p>
                  </div>
                  <div className="flex flex-col items-center mx-[25px]">
                    <img src={mobileBlue} alt="" />
                    <span className="text-center mt-[10px]">
                      (843) 555-0130
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={email} alt="" />
                    <span className="text-center mt-[21px]">
                      willie.jennings@example.com
                    </span>
                  </div>
                </div>
                <div className="my-[50px]">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14452.262588350279!2d-50.16082315758052!3d-25.09963903936069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1672359163690!5m2!1spt-BR!2sbr" width="516" height="344" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
              <div className="flex gap-7 items-start">
                <img src={twitterBlueIcon} alt="" />
                <img src={facebookBlueIcon} alt="" />
                <img src={linkedinBlueIcon} alt="" />
              </div>
            </div>
          </div>
        </section>
        <footer className="w-[1777px] py-[150px] bg-gray-500 mt-[102px]">
          <div>
            <div className="flex justify-center gap-5">
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
              <div className="flex flex-col text-white-100 ml-[125px]">
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
                <div className="flex gap-6 py-[30px]">
                  <img src={twitter} alt="" />
                  <img src={facebook} alt="" />
                  <img src={linkedin} alt="" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;
