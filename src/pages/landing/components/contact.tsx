import locationBlue from '../../../assets/location_blue.svg';
import email from '../../../assets/email.svg';
import mobileBlue from '../../../assets/mobile_blue.svg';
import twitterBlueIcon from '../../../assets/twitter_blue.svg';
import facebookBlueIcon from '../../../assets/facebook_blue.svg';
import linkedinBlueIcon from '../../../assets/linkedin_blue.svg';
import Button from '../../../components/button';

function Contact() {
  return (
    <>
      <section className="xl:hidden flex flex-col items-center px-14">
        <h3 className="text-5xl tracking-[0.2px] text-gray-500 mt-[203px] mb-[17px] p-[10px]">Contact Us</h3>
        <p className="w-[285px] text-[1.75rem] leading-10 tracking-[0.2px] text-gray-400 mb-[60px]">
          Most calendars are designed for teams.
          <br />
          <span className="hidden">Slate is designed for freelancers</span>
        </p>
        <div className="flex gap-7 items-start mb-[68px]">
          <img src={twitterBlueIcon} alt="" />
          <img src={facebookBlueIcon} alt="" />
          <img src={linkedinBlueIcon} alt="" />
        </div>
        <div className="">
          <div className="">
            <div className="flex flex-col gap-7 my-[28px]">
              <div className="flex items-center gap-2">
                <img src={locationBlue} alt="" className="w-[26px] h-[32px]" />
                <p>
                  6386 Spring St undefined Anchorage,
                  <br />
                  Georgia 12473 United States
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={mobileBlue} alt="" className="w-[26px] h-[32px]" />
                <span>
                  (843) 555-0130
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img src={email} alt="" className="w-[26px] h-[32px]" />
                <span>
                  willie.jennings@example.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-[360px] h-[669px] mt-[50px] border-[1px] border-[#DDD] rounded-[20px] shadow-[0px_13px_19px_rgba(0,0,0,0.7)]">
          <strong className="text-xl block mb-[45px]">
            Contact Us
          </strong>
          <form className="flex flex-col gap-[45px]">
            <input
              type="text"
              placeholder="Your Name"
              className="w-[280px] h-[54px] rounded-[56px] py-[19px] pl-[39px] mr-3 bg-white-500 border-[1px] border-white-600 outline-none placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="w-[280px] h-[54px] rounded-[56px] py-[19px] pl-[39px] mr-3 bg-white-500 border-[1px] border-white-600 outline-none placeholder:text-sm"
            />
            <textarea
              placeholder="Your Message"
              className="w-[280px] min-h-[193px] py-[23px] pl-[20px] resize-none mr-3 bg-white-500 border-[1px] border-white-600 outline-none placeholder:text-sm"
            />
            <Button title="Send" bgBlue className="w-[145px] h-[56px]" />
          </form>
        </div>

      </section>

      <section className="hidden xl:inline">
        <h3 className="text-5xl tracking-[0.2px] text-gray-500 mt-[203px] text-center mb-[17px] p-[10px]">Contact Us</h3>
        <p className="text-[1.75rem] leading-10 text-center tracking-[0.2px] text-gray-400 mb-[60px]">
          Most calendars are designed for teams.
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
                <Button title="Send" bgBlue />
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

    </>
  );
}

export default Contact;
