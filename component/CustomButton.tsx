"use client";

import { CustomButtonProps } from "@types";

const CustomButton = ({  btnType, containerStyles,  title,  handleClick }: CustomButtonProps) => (
    <button
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span>{title}</span>
    </button>
);

export default CustomButton ;
