import React, { useState } from "react";
import BillTotal from "./components/BillTotal";
import Keyboard from "./components/Keyboard";
import Result from "./components/Result";
import TipPercent from "./components/TipPercent";

const App = () => {
    const [bill, setBill] = useState("0");
    const [billSelected, setBillSelected] = useState(false);
    const [tip, setTip] = useState("10");
    const [tipSelected, setTipSelected] = useState(false);
    const [people, setPeople] = useState("1");

    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-br from-pink-300 to-sky-400">
            <div className="w-screen h-screen md:max-w-[390px] md:max-h-[844px] md:h-full md:w-full bg-white bg-opacity-50 rounded-2xl border-2 border-gray-300 shadow-2xl pt-32 flex flex-col space-y-8">
                <BillTotal
                    bill={bill}
                    setBill={setBill}
                    billSelected={billSelected}
                    setBillSelected={setBillSelected}
                    setTipSelected={setTipSelected}
                />

                <TipPercent
                    tip={tip}
                    setTip={setTip}
                    tipSelected={tipSelected}
                    setTipSelected={setTipSelected}
                    setBillSelected={setBillSelected}
                />

                <Result
                    people={people}
                    setPeople={setPeople}
                    setTipSelected={setTipSelected}
                    setBillSelected={setBillSelected}
                    billTotal={bill}
                    tipPercent={tip}
                />

                <Keyboard
                    bill={bill}
                    setBill={setBill}
                    billSelected={billSelected}
                    tip={tip}
                    setTip={setTip}
                    tipSelected={tipSelected}
                />
            </div>
        </div>
    );
};

export default App;
