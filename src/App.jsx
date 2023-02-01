import { useState } from 'react'
import Logo from '../images/card-logo.svg'
import './App.css'

export default function App() {

  const [data, setData] = useState(
    {cardholder:"", cardnumber:"", expm:"", expy:"", cvc:""}
  )

  document.querySelectorAll('input[type="number"]').forEach(input => {
    input.oninput = () => {
      if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength)
    }
  })

  function handleChange(event) {
    setData(prevData =>  {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    })
  }



  return (
    <main>
      <div className="left-side">

        <div className='front-card'>
          <img className="logo" src={Logo} alt="logo" />
        <div className='card-number'>
          <p className='zeros'>{data.cardnumber ? data.cardnumber : "0000 0000 0000 0000"}</p>
        </div>
        <div className='name-exp'>
          <p className='cardholder-name'>{data.cardholder ? data.cardholder : "Jane Appleseed"}</p>
          <p>{data.expm ? data.expm : "00"}/{data.expy ? data.expy : "00"}</p>
        </div>
        </div>

        <div className="back-card">
         <p className='cvc'>{data.cvc ? data.cvc : "000"}</p>
        </div>
      </div>


      <div className="right-side">
      <form action="">
            <h2>CARDHOLDER NAME</h2>
            <input
                autoComplete='off'
                className="input-1" 
                type="text" 
                name="cardholder"
                onChange={handleChange}
                value={data.cardholder}
                placeholder="e.g. Jane Appleseed"
            />

            <h2>CARD NUMBER</h2>
            <input 
                className="input-2" 
                type="text" 
                name="cardnumber"
                onChange={handleChange}
                value={data.cardnumber}
                placeholder="e.g. 1234 5678 9123 0000"
                min="0"
                max="19"
                maxlength="19"
            />

            <div className='exp-date'>
              <div className='my'>
                <h2>EXP. DATE (MM/YY)</h2>
                <input 
                className='input-3'
                type="number" 
                name="expm"
                onChange={handleChange}
                value={data.expm}
                placeholder="MM"
                min="0"
            
                maxlength="2"
                />
                <input 
                className='input-4'
                type="number" 
                name="expy"
                onChange={handleChange}
                value={data.expy}
                placeholder="YY"
                min="0"
        
                maxlength="2"
                />
              </div>

              <div className="cvc-inp">
                <h2 className='cvc-text'>CVC</h2>
                <input 
                type="number" 
                name="cvc"
                onChange={handleChange}
                value={data.cvc}
                placeholder="e.g. 123"
                min="0"
                maxlength="3"
                />
              </div>
            </div>

            <button type='button'>Confirm</button>
          </form>
      </div>
    </main>
  )
}

