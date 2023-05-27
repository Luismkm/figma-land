import Button from '../../../components/button';

function Hero() {
  return (
    <>
      <section className="w-[826px] h-[335px] flex flex-col justify-center items-center">
        <h1 className="graphik font-normal md:font-bold text-5xl md:text-[4.625rem] w-[333px] md:w-auto text-white-100 leading-[55px] md:leading-[84px] mt-[110px] text-center block">
          The best products
          start with Figma
        </h1>
        <h4 className="hidden md:inline-block leading-[40px] text-[1.75rem] text-center text-white-100 mt-[17px] p-[10px]">
          Most calendars are designed for teams. Slate is designed
          for freelancers
        </h4>
        <h4 className="inline-block md:hidden w-[285px] leading-[40px] text-[1.75rem] text-center text-white-100 mt-[17px] p-[10px]">
          Most calendars are
          designed for teams.
        </h4>
      </section>
      <div className="p-5 w-[276px] h-[92px] mt-[40px]">
        <Button title="Try For Free" bgBlue />
      </div>
    </>
  );
}

export default Hero;
