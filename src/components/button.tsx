import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  bold?: boolean;
  bgBlue?: boolean
}

function Button({
  title, bold, bgBlue, ...props
}: ButtonProps) {
  return (
    <button
      className={`w-[236px] h-[52px]  rounded-[35px] text-xl text-center 
      ${bgBlue ? 'bg-blue-500 text-white-100' : 'bg-white-100 text-blue-500'} 
      ${bold ? 'font-bold' : 'font-normal'}`}
      {...props}
    >
      {title}
    </button>
  );
}

export default Button;
