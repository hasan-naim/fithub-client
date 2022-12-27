import React from "react";
import "./PrimaryButton.css";

type prop = {
  txt: string;
  className?: string;
};

function PrimaryButton({ txt, className }: prop) {
  return (
    <button
      className={`primray-btn bg-base-100 hover:text-base-100 py-3 px-4 shadow-primaryBtnShadow before:shadow-primaryBtnShadow ${className}`}
    >
      {txt}
    </button>
  );
}

export default PrimaryButton;
