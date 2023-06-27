import {useState, useEffect} from "react";



export default function App() {

  const [advice, setAdvice] = useState("");
  const [count, setCount] =  useState(0);

  async function getAdvice(){
   const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(data.slip);
  setAdvice(data.slip.advice)
  setCount((c) => c+=1)
  }

  useEffect(function(){
    getAdvice();
  },[]);

  return(
    <div>
    <h1 style ={{color: "gold"}}>I can't imagine my life.</h1>
   <Message advice = {advice} />
    <button onClick = {getAdvice}>Get Advice</button>
    <strong><p>Clicked this button <a href="#" style = {{color: "green"}}>{count}</a> times</p></strong>
    </div>
  );  
}

function Message(props) {
  return(
    <h1 style = {{color: "grey"}}>{props.advice}</h1>
  );
   
}