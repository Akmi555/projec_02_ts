import "./styles.css";
import { ButtonProps } from "./tyoes";


function Button({ name, type = "button", onButtonClick }: ButtonProps) {
  
  return (
    <button className="button-component" type={type} onClick={onButtonClick}>
      {name}
    </button>
  );
}

export default Button;
