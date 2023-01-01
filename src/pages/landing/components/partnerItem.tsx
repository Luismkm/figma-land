type ItemProps = {
  logo: string
  alt: string
}

function PartnerItem({ logo, alt }: ItemProps) {
  return (
    <img src={logo} className="border-[1px] border-solid border-white-600 px-[40px] h-[165px]" alt={alt} />
  );
}

export default PartnerItem;
