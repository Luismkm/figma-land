import newsletter from '../../../assets/newsletter.svg';
import Button from '../../../components/button';

function Subscribe() {
  return (
    <>
      <div className="xl:hidden w-[100%] pt-[150px] pb-[173px] px-14 flex flex-col items-center">
        <strong className="text-xl font-bold text-gray-500">
          At your fingertips
        </strong>
        <h3 className="leading-[55px] text-5xl tracking-[0.2px] text-gray-500 mt-[17px] mb-[25px]">
          Newsletter
        </h3>
        <p className="text-[1.75rem] leading-10 text-center tracking-[0.2px] text-gray-400">
          Most calendars are designed for teams.
          Slate is designed for freelancers
        </p>
        <img src={newsletter} className="my-20 w-full max-w-xl" alt="imagen de envelope aberto com papéis" />
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
              className="w-full h-[54px] rounded-[56px] py-[19px] pl-[39px] mr-3 bg-white-500 border-[1px] border-white-600 outline-none placeholder:text-sm"
            />
            <Button title="Subscribe" type="submit" bgBlue className="w-full mt-3" />
          </form>
        </div>
      </div>

      <div className="hidden w-[100%] pt-[150px] pb-[173px] xl:flex justify-center">
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
              <Button title="Subscribe" type="submit" bgBlue className="w-[172px]" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
