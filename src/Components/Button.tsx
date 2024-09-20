import { ButtonProps } from "../lib/types";

function Button({onClick ,children, buttonType = 'primary'}: ButtonProps) {
  return (
    <button
    onClick={onClick}
    type='submit'
      className={`h-11 bg-[#473a2b] hover:bg-[#322618] w-full rounded-md text-[#f7ece1] cursor-pointer ${
        buttonType === 'secondary' ? 'opacity-[70%]' : ''
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
