import React from "react";
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrenyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
      
}) {
   

    return (
        <div className={"bg-white p-3 rounded-lg text-sm flex "}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
                    // here we are preventing the clash if user didnt give any change value so we check first that it only execute when it contains some value
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e)=>{onCurrenyChange && oncuechange(e.target.value)}}
                >
                    
                        {currencyOptions && currencyOptions.map((currency)=>(
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
