import React from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onOptionsChange,
    currencyOptions = [],
    selectCurrency = "usd",
    currencyDisable = false,
    amountDisable = false,

    className = "",
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2 pr-4">
                <label className="text-black/40 mb-4 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) => { onAmountChange && onAmountChange(Number(e.target.value))}}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e) => onOptionsChange && onOptionsChange(e.target.value)}
                >
                    
                        {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
