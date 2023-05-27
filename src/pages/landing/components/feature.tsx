import drawing from '../../../assets/drawing.svg';
import draw from '../../../assets/draw.svg';
import brush from '../../../assets/brush.svg';
import FeatureItem from './FeatureItem';

import video from '../../../assets/video.png';

function Feature() {
  return (
    <>
      <div>
        <div>
          <h3 className="text-5xl tracking-[0.2px] text-gray-500 text-center mb-[17px]">Features</h3>
          <p className="hidden md:block text-gray-400 text-[1.75rem] leading-[40px] tracking-[0.2px] text-center">
            Most calendars are designed for teams.
            <br />
            Slate is designed for freelancers
          </p>
          <p className="block md:hidden text-gray-400 text-[1.75rem] leading-[40px] tracking-[0.2px] text-center">
            Most calendars are
            <br />
            designed for teams.
          </p>
        </div>
        <div className="mt-20 md:hidden">
          <img src={video} alt="" />
        </div>
        <div className="w-[255px] md:w-[869px] h-auto md:h-[257px] grid grid-cols-1 md:grid-cols-3 gap-[52px] md:gap-0 lg:gap-[52px] md:px-14 lg:px-0 mt-20 mx-auto">
          <FeatureItem
            icon={drawing}
            title="OpenType features
              Variable fonts"
            description="Slate helps you see how
              many more days you need
              to work to reach your
              financial goal."
          />
          <FeatureItem
            icon={draw}
            title="Design with real data"
            description="Slate helps you see how
              many more days you need
              to work to reach your
              financial goal."
          />
          <FeatureItem
            icon={brush}
            title="Fastest way to
            take action"
            description="Slate helps you see how
              many more days you need
              to work to reach your
              financial goal."
          />
        </div>
      </div>
      <div className="mt-20 hidden md:flex">
        <img src={video} alt="" />
      </div>
    </>
  );
}

export default Feature;
