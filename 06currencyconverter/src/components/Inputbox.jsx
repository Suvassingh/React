
import React, { useId } from "react";

function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();

  return (
    <div
      className={`bg-white p-3 rounded-lg text-sm flex justify-between items-end gap-3 ${className}`}
    >
      {/* Amount Section */}
      <div className="w-1/2">
        <label htmlFor={id} className="text-black/60 mb-1 block">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent border-b border-gray-300 py-1.5 text-black"
          placeholder="Enter amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency Section */}
      <div className="w-1/2">
        <label className="text-black/60 mb-1 block">Currency Type</label>
        <select
          className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none w-full"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled || currencyOptions.length === 0}
        >
          {currencyOptions.length === 0 ? (
            <option>Loading...</option>
          ) : (
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
