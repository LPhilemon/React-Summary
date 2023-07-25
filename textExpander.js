import {useState} from "react";
import "./styles.css";



export default function App() {
  

  const text1 = " Space missions have given us incredible insights into our universe and have inspired future generations to keep reaching for the stars. Space travel is a pretty cool thing to think about. Who knows what we'll discover next!";
  const text2 = "Space travel requires some seriously amazing technology and collaboration between countries, private companies, and international space organizations. And while it's not always easy (or cheap), the results are out of this world. Think about the first time humans stepped foot on the moon or when rovers were sent to roam around on Mars."
  const text3 = "Space travel is the ultimate adventure! Imagine soaring past the stars and exploring new worlds. It's the stuff of dreams and science fiction, but believe it or not, space travel is a real thing. Humans and robots are constantly venturing out into the cosmos to uncover its secrets and push the boundaries of what's possible."
 
  return (
    <div>


<div>
<TextExpander text = {text3}>
       
       </TextExpander>

</div>
      <TextExpander text = {text2}>
       
      </TextExpander>

     
      <div className = "box"> 
      <TextExpander text = {text1}>
       
      </TextExpander>
     </div>
    </div>
  );
}

function TextExpander({text, children}) {
  const [expanded, setExpanded] = useState(0);
   function handleExpansionContraction(){
    setExpanded(!expanded)
  }
  return <>
 
         
       <span>
       {expanded ? text: text.split(" ").slice(0,20).join(" ")}

        <Button isExpanded = {expanded} onExpand = {handleExpansionContraction} >
          {expanded ?  " Collapse text" :  " Show text...."}
       </Button>
         </span> 
     
    {children}
  </>;
}

const buttonDesign = {
  border: "none",
  background: "none",
  color: "#000"
  
}
function Button(
    {
      children, colors, isExpanded,
      onExpand

    }
  )
  
  
  {
    console.log(colors);
return (<button style = {{
  border: "none",
  background: "none",
  color: isExpanded? "#ff6622": ""
} }
onClick = {onExpand}>
  {children}
  </button>);
}