const Button = ({
  bgPrimary,
  textPrimary,
  bgScendary,
  textScendary,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      className={`
      ${bgPrimary} 
      py-0.5 px-1 
      rounded text-white 
      font-semibold 
      text-xl border-2 
      hover:${bgScendary} hover:${textScendary} 
      cursor-pointer duration-300
      ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
