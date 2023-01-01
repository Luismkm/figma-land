type FeatureItemProps = {
  icon: string
  title: string
  description: string
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex flex-col justify-start items-center">
      <img src={icon} className="w-[45px] h-[45px]" alt="um circulo e um quadrado azul" />
      <h3 className="text-xl text-center text-gray-500 font-bold my-[20px] leading-7">
        {title}
      </h3>
      <p className="text-lg text-gray-400 leading-[25px] tracking-[0.2px] text-center px-[10px]">
        {description}
      </p>
    </div>
  );
}

export default FeatureItem;
