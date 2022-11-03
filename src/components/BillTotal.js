import React from "react";

const BillTotal = ({
    billSelected,
    setBillSelected,
    setTipSelected,
    bill,
    setBill,
}) => {
    return (
        <div className="flex flex-col space-y-2 px-8">
            <h1 className="font-bold">Bill Total</h1>
            <div className="text-3xl font-semibold">
                <input
                    type="number"
                    min="0.00"
                    step="any"
                    className={`w-full bg-inherit outline-none tracking-wide ${
                        billSelected ? "text-black" : "text-gray-400"
                    }`}
                    value={Number(bill).toFixed(2)}
                    onClick={() => {
                        setBillSelected(true);
                        setTipSelected(false);
                    }}
                    readOnly="readonly"
                    onChange={(e) => setBill(e.target.value)}
                />
            </div>
        </div>
    );
};

export default BillTotal;
