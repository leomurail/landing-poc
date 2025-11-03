import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button";
  variant?: "primary" | "secondary" | "toggle";
  size?: "s" | "m" | "l";
}

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "m",
}: ButtonProps) {
  const className = `btn ${variant} ${size}`;

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
