import React from "react";
import "./PrimaryButton.css";

type prop = {
  txt: string;
  className?: string;
  shadow?: boolean;
  bg?: string;
};

function PrimaryButton({ txt, className, shadow, bg }: prop) {
  return (
    <button
      className={`primray-btn ${
        bg ? `bg-${bg} text-${bg}` : "bg-base-100 text-base-100"
      } hover:text-base-100 py-3 px-4 ${
        shadow && "shadow-primaryBtnShadow before:shadow-primaryBtnShadow"
      } ${className}`}
    >
      {txt}
    </button>
  );
}

export default PrimaryButton;
