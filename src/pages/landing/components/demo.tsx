import macbook from '../../../assets/macbook.png';
import Button from '../../../components/button';

function Demo() {
  return (
    <div className="w-[100%] py-[160px] xl:py-[226px] px-10 lg:px-0 flex flex-col xl:flex-row justify-center">
      <div className="flex flex-col items-center xl:items-start">
        <h3 className="text-5xl text-gray-500 leading-[55px] tracking-[0.2px] text-center xl:text-start">
          Fastest way to
          <br />
          organize
        </h3>
        <p className="w-[285px] md:w-[532px] text-[28px] leading-10 mt-[17px] mb-[70px] py-[10px] text-gray-400">
          Most calendars are designed for teams.
          <br />
          <span className="hidden md:inline">Slate is designed for freelancers</span>
        </p>
        <Button title="Try For Free" bold bgBlue />
      </div>
      <div>
        <img className="mt-[74px] mx-auto xl:mt-0 bg-cover" src={macbook} alt="Macbook" />
      </div>
    </div>
  );
}

export default Demo;
