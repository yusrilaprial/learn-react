interface ButtonProps {
  color?: string;
  bgColor?: string;
  children: JSX.Element | JSX.Element[] | string ;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({color = "white", bgColor = "#007bff", children, onClick}: ButtonProps) => {
  const buttonStyle = {
    padding: "10px",
    backgroundColor: bgColor,
    color: color,
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    minWidth: "100px",
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
