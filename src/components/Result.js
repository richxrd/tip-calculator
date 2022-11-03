import React from "react";

const Result = ({
    people,
    setPeople,
    setTipSelected,
    setBillSelected,

    billTotal,
    tipPercent,
}) => {
    const getSplit = () => {
        return (
            (Number(billTotal) * Number(tipPercent / 100) + Number(billTotal)) /
            Number(people)
        ).toFixed(2);
    };

    return (
        <div className="w-full px-4">
            <div className="bg-blue-300 bg-opacity-60 h-fit p-4 rounded-xl flex justify-between text-blue-800">
                <div className="flex flex-col justify-between space-y-2">
                    <h1 className="font-bold">People</h1>
                    <div
                        className="flex items-center space-x-2"
                        onClick={() => {
                            setBillSelected(false);
                            setTipSelected(false);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                            onClick={() => {
                                if (people > 1) setPeople(Number(people) - 1);
                            }}
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <h2 className="text-4xl font-semibold">{people}</h2>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                            onClick={() => {
                                setPeople(Number(people) + 1);
                            }}
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <h1 className="font-bold">Per Person</h1>
                    <h2 className="text-4xl font-semibold">${getSplit()}</h2>
                </div>
            </div>
        </div>
    );
};

export default Result;
