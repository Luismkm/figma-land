import Button from '../../../components/button';

function Hero() {
  return (
    <>
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
        <Button title="Try For Free" bgBlue />
      </div>
    </>
  );
}

export default Hero;
