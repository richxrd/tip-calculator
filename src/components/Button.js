import React from "react";

const Button = ({ value, handleClick }) => {
    return (
        <div
            className="border-[1px] p-4 py-6 flex items-center jusitfy-center text-2xl font-bold bg-white bg-opacity-20 hover:bg-opacity-40 transition-all duration-150 cursor-default active:bg-blue-200 select-none"
            onClick={() => handleClick(value)}
        >
            {value === "delete" ? (
                <h1 className="w-full text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 mx-auto"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.22 3.22A.75.75 0 017.75 3h9A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17h-9a.75.75 0 01-.53-.22L.97 10.53a.75.75 0 010-1.06l6.25-6.25zm3.06 4a.75.75 0 10-1.06 1.06L10.94 10l-1.72 1.72a.75.75 0 101.06 1.06L12 11.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L12 8.94l-1.72-1.72z"
                            clipRule="evenodd"
                        />
                    </svg>
                </h1>
            ) : (
                <h1 className="w-full text-center">{value}</h1>
            )}
        </div>
    );
};

export default Button;
