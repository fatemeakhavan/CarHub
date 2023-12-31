"use client";

import { customButtonProps } from "../types/index";
import Image from "next/image";

const CustomButton = ({  btnType, containerStyles,  title,
                          handleClick, textStyles , rightIcon , isDisabled}: customButtonProps) => (
    <button
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles} `}>
            {title}
        </span>
        {rightIcon && (
            <div className="relative w-6 h-6">
                <Image src={rightIcon}
                       alt="right icon"
                       fill
                       className="object-contain"
                />
            </div>
        )}
    </button>
);

export default CustomButton ;
