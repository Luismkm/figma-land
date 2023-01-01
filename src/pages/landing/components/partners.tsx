import amazon from '../../../assets/amazon.svg';
import google from '../../../assets/google.svg';
import uber from '../../../assets/uber.svg';
import dropbox from '../../../assets/dropbox.svg';
import microsoft from '../../../assets/microsoft.svg';
import PartnerItem from './partnerItem';
import Button from '../../../components/button';

function Partners() {
  return (
    <section className="flex flex-col justify-center items-center pb-[80px]">
      <h3 className="text-5xl tracking-[0.2px] text-gray-500 text-center mb-[17px]">
        Partners
      </h3>
      <p className="text-[1.75rem] leading-10 text-center tracking-[0.2px] text-gray-400 mt-[17px] mb-[90px]">
        Most calendars are designed for teams.
        <br />
        Slate is designed for freelancers
      </p>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-[273px,273px,302px,220px] h-[165px] w-auto">
          <PartnerItem logo={google} alt="logo Google" />
          <PartnerItem logo={amazon} alt="logo Amazon" />
          <PartnerItem logo={microsoft} alt="logo Microsoft" />
          <PartnerItem logo={uber} alt="logo Uber" />
        </div>
        <div className="grid grid-cols-[309px,273px,220px,273px] h-[165px] w-[1075px] mb-[80px]">
          <PartnerItem logo={dropbox} alt="logo Google" />
          <PartnerItem logo={google} alt="logo Microsoft" />
          <PartnerItem logo={uber} alt="logo Uber" />
          <PartnerItem logo={amazon} alt="logo Amazon" />
        </div>
      </div>
      <Button title="Try For Free" bold bgBlue />
    </section>
  );
}

export default Partners;
