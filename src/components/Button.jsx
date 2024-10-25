import { NavLink } from "react-router-dom";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, to, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
    
  );

  const renderLink = () => (
    <NavLink to={to} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </NavLink>
  );

  return to ? renderLink() : renderButton();
};

export default Button;
