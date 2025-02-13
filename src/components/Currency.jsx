import React, { useState } from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "../styles/currency.css"
import axios from 'axios';


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_ddFLX44neNm6JdCWFQOoUa4yC2d1FeTm7U0Z1K5Y"

function Currency() {

    const [amount, setAmount] = useState(1)
    const [fromCurrency, setFromCurrency] = useState("USD")
    const [toCurrency, setToCurrency] = useState("TRY")
    const [result, setResult] = useState(1)

    const exchange = async () => {

        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        const result = (response.data.data[toCurrency] * amount).toFixed(2)
        setResult(result)

    }

    return (
        <div className='currency-main'>

            <div style={{ marginBottom: "20px", marginTop: "-30px" }}>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>

            <div style={{ marginBottom: "30px" }}>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" className='amount-input' />
                <select
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className='first-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaRegArrowAltCircleRight className="arrow-logo" style={{ fontSize: "25px", }} />

                <select
                    onChange={(e) => setToCurrency(e.target.value)}
                    className='second-currency-option'>

                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>

                </select>

                <input
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    type="number" className='result-input' />
            </div>

            <div className="converter">
                <button
                    onClick={exchange}
                    className="convert-btn">Çevir</button>
            </div>
        </div>
    )
}

export default Currency