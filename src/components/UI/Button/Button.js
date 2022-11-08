import "./Button.css";

const Button = function ({ type, children, className, onClick }) {
  const classes = "btn " + className;
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
