import React from "react";

import "./styles.css";

interface BackButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const BackButton = ({ children, ...props }: BackButtonProps) => {
  return (
    <button className="backButton" {...props}>
      {children}
    </button>
  );
};

export default BackButton;
