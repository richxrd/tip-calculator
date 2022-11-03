import React from "react";

const TipPercent = ({
    tipSelected,
    setTipSelected,
    setBillSelected,
    tip,
    setTip,
}) => {
    return (
        <div className="flex flex-col space-y-2  px-8">
            <h1 className="font-bold">Tip %</h1>
            <div className="text-3xl font-semibold">
                <input
                    type="number"
                    min="0"
                    max="200"
                    step="1"
                    className={`w-full bg-inherit outline-none tracking-wide ${
                        tipSelected ? "text-black" : "text-gray-400"
                    }`}
                    value={tip}
                    onClick={() => {
                        setBillSelected(false);
                        setTipSelected(true);
                    }}
                    readOnly="readonly"
                    onChange={(e) => setTip(e.target.value)}
                />
            </div>
        </div>
    );
};

export default TipPercent;
