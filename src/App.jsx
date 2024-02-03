import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
 
  const [amount,setAmount]=useState(0)
const [from,setFrom]=useState('inr')
const [to,setTo]=useState('usd')
const [convertedAmount, setConvertedAmount]=useState(0)

const currencyInfo = useCurrencyInfo(from)
const options = Object.keys(currencyInfo)
// console.log(currencyInfo)

const swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

const convert = () => {
  setConvertedAmount(amount * currencyInfo[to] )
}



  return (
  <div className='main-container'>
     <div className='inp-container'>
        <InputBox
          label="from"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
        >

        </InputBox>

        <button onClick={swap} className='swap-btn'>
            swap
        </button>
        <InputBox 
        label='To'
        amount={convertedAmount}
        selectCurrency={to}
        currencyOptions={options}
        onCurrencyChange={(currency) => setTo(currency) }
        amountDisable='true'
        
        >

        </InputBox>

       <button className='submit-btn' onClick={convert}>convert from {from.toUpperCase()} to {to.toUpperCase()}</button>

     </div>
  </div>
  )
}

export default App
