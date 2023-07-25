// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

const currencyCalls = "https://api.frankfurter.app/latest?";



export default function App() {

  const [input, setInput] = useState("");
  const [fromCurr, setFromCurr] =  useState("EUR");
  const [toCurr, setToCurr] =  useState("USD");
  const [result, setResult] =  useState("");

  console.log(fromCurr);
  useEffect(function(){
    async function getConversion(){
      const res = await 
      fetch(`https://api.frankfurter.app/latest?amount=${input}&from=${fromCurr}&to=${toCurr}`);
      const data = await res.json();
      
      
      // setResult(data.rates);
      if (fromCurr !== toCurr) {
      if (data?.rates === null) return;
      const val = Object.values(data?.rates)[0];
      setResult(val);
      console.log(val);}
      
    }

    getConversion();
    
  }, [input,fromCurr, toCurr]);
  return (
    <div>
      <input type="text" value = {input} onChange = {(e)=>setInput(Number(e.target.value))}/>
      <select value = {fromCurr} onChange = {(e)=>setFromCurr(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value = {toCurr} onChange = {(e)=>setToCurr(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{result}</p>
    </div>
  );
}
