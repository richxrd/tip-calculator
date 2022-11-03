import React from "react";
import Button from "./Button";

const Keyboard = ({
    bill,
    setBill,
    billSelected,
    tip,
    setTip,
    tipSelected,
}) => {
    const handleClick = (value) => {
        if (billSelected && value !== "." && value !== "delete") {
            if (bill === "0.00") {
                setBill(value);
            } else {
                if (bill.includes(".")) {
                    const index = bill.indexOf(".");
                    if (bill.length - index > 2) {
                        return;
                    }
                }
                const newBill = String(bill) + String(value);
                setBill(newBill);
            }
        } else if (billSelected && value === ".") {
            if (bill.includes(".")) {
            } else {
                const newBill = String(bill) + ".";
                setBill(newBill);
            }
        } else if (billSelected && value === "delete") {
            setBill("0");
        }

        if (tipSelected && value !== "." && value !== "delete") {
            if (tip === "10" || tip === "0") {
                setTip(value);
            } else {
                if (Number(tip) < 1000) {
                    const newTip = String(tip) + String(value);
                    setTip(newTip);
                }
            }
        } else if (tipSelected && value === "delete") {
            setTip("0");
        }
    };

    return (
        <div className="grid grid-cols-3 grid-rows-4 ">
            <Button value={"1"} handleClick={handleClick} />
            <Button value={"2"} handleClick={handleClick} />
            <Button value={"3"} handleClick={handleClick} />
            <Button value={"4"} handleClick={handleClick} />
            <Button value={"5"} handleClick={handleClick} />
            <Button value={"6"} handleClick={handleClick} />
            <Button value={"7"} handleClick={handleClick} />
            <Button value={"8"} handleClick={handleClick} />
            <Button value={"9"} handleClick={handleClick} />
            <Button value={"."} handleClick={handleClick} />
            <Button value={"0"} handleClick={handleClick} />
            <Button value={"delete"} handleClick={handleClick} />
        </div>
    );
};

export default Keyboard;
