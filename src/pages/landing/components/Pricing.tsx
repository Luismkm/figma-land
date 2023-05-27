import Button from '../../../components/button';

function Pricing() {
  return (
    <section className="flex flex-col items-center w-[1777px] bg-gray-500 py-[100px] px-14 xl:px-0">
      <h3 className="text-5xl tracking-[0.2px] text-white-100 text-center mb-[17px] p-[10px]">Pricing</h3>
      <p className="w-[286px] md:w-full text-2xl md:text-[1.75rem] leading-10 text-center tracking-[0.2px] text-white-100">
        Most calendars are designed for teams.
        <br />
        <span className="hidden xl:inline">Slate is designed for freelancers</span>
      </p>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-[50px] mt-20">
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
          <Button title="Order Now" bgBlue />
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
          <Button title="Order Now" />
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
          <Button title="Order Now" bgBlue />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
