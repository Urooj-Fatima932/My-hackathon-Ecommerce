import React from 'react';
import { CiSearch } from "react-icons/ci";
interface InputProps {
    placeholder?: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder = 'Search...', value, onChange }) => {
    return (
       
        <div className="relative p-2 w-[100%] md:w-[100%] flex items-center bg-bgray gap-3 rounded-2xl">
             <CiSearch size={25} color='Cblack'/>
            <input
                type="text"
                className=" text-sm  bg-transparent w-full outline-none border-none"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;