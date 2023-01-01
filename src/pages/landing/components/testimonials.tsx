import avatar from '../../../assets/avatar.png';
import ibm from '../../../assets/ibm.svg';
import Button from '../../../components/button';

function Testimonials() {
  return (
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
      <Button title="More Testimonials" bold bg-bgBlue />
    </section>
  );
}

export default Testimonials;
