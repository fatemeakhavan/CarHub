import {MouseEventHandler} from "react";

export interface customButtonProps{
    text:string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
    textStyles ?: string;
    rightIcon ?: string;
    isDisabled?: boolean;
}
export interface SearchManufacturerProps{
    manufacturer:string;
    setManufacturer:(manufacturer:string)=>void;
}
export interface CarProps{
    city_map:number;
    class:string;
    combination_map:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}
export interface FilterProps{
    manufacturer:string;
    year:number;
    fuel:string;
    limit:number;
    model:string;

}
