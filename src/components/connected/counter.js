import { useState } from "react";

function Counter() {
 const [count,setCount] = useState(1);
  
 const addState = function(){
  //
 }

 return (
  <div>
   <button>-</button>
   <span>{count}</span>
   <button>+</button>
  </div>
 );
}

export default Counter;