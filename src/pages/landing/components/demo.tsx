import macbook from '../../../assets/macbook.png';
import Button from '../../../components/button';

function Demo() {
  return (
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
        <Button title="Try For Free" bold bgBlue />
      </div>
      <img src={macbook} alt="Macbook" />
    </div>
  );
}

export default Demo;
