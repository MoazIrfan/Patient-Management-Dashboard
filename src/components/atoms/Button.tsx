import React from "react";
import Button from "@mui/material/Button";

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  className?: string;
};

const CustomButton: React.FC<ButtonProps> = ({ label, onClick, variant = "contained", color = "primary", className }) => {
  return (
    <Button className={`${className} no-hover`} variant={variant} color={color} onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;