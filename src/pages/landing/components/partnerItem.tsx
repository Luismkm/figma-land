type ItemProps = {
  logo: string;
  alt: string;
  className?: any;
}

function PartnerItem({ logo, alt, className }: ItemProps) {
  return (
    <img src={logo} className={`border-[1px] border-solid border-white-600 px-[40px] h-[165px] ${className}`} alt={alt} />
  );
}

export default PartnerItem;
