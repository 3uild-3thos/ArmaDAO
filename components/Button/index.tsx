import React from "react";

type ButtonType = "button" | "reset" | "submit" | undefined;

interface IButton {
  type?: ButtonType;
  children?: any;
  name?: string;
  onClick?: () => void;
}

function Button({ type, children, onClick }: IButton) {
  return (
    <button
      type={type}
      onClick={onClick ?? (() => {})}
      className="bg-slate-700 px-3 py-2 text-white rounded-lg"
    >
      {children}
    </button>
  );
}

export default Button;
