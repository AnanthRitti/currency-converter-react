import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=0,
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false

}) {
  return (
    
    <div className='input-box'>
        {console.log(currencyOptions)}
       <div className='amount'>
          <label>
             {label}
          </label>
          <input 
            type='number'
            placeholder='Amount'
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange(Number(e.target.value))}

        />
       </div>
       <div className='currency'>
          <p>
            currency type
          </p>

          <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          >

    
            {currencyOptions.map((currency) => (
                <option key={currency} value={currency}> {currency} </option>
            ))}
               
          </select>
        </div>
        
        
    </div>
  )
}

export default InputBox