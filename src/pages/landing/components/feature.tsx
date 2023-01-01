import drawing from '../../../assets/drawing.svg';
import draw from '../../../assets/draw.svg';
import brush from '../../../assets/brush.svg';
import FeatureItem from './FeatureItem';

function Feature() {
  return (
    <div>
      <div>
        <h3 className="text-5xl tracking-[0.2px] text-gray-500 text-center mb-[17px]">Features</h3>
        <p className="text-gray-400 text-[1.75rem] leading-[40px] tracking-[0.2px] text-center">
          Most calendars are designed for teams.
          <br />
          Slate is designed for freelancers
        </p>
      </div>
      <div className="w-[869px] h-[257px] grid grid-cols-3 gap-[52px] mt-20">
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
  );
}

export default Feature;
