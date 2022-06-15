import { useState } from 'react';
import {web3Module} from '../authContext';


function Minter() {
 const [count, setCount] = useState(1); 

 const addCount = function(){
  const num = count;
  if(num >= 10){
    return;
  }
  setCount(num+1);
}
 const subtractCount = function(){
  const num = count;
  if(num <= 1){
    return;
  }
  setCount(num-1);
}
  
 return (
  <div className="flex flexColumn flexAlignCenter">
    <div style={{height: '2em'}}></div>
   <div className='counter flex flexaAlignCenter flexJustifyCenter'>
    <button onClick={subtractCount} className='counterButtons'>-</button>
    <div style={{position: 'relative', top:'0.1em'}}>{count}</div>
    <button onClick={addCount} className='counterButtons'>+</button>
   </div>
   <button className="whiteButton" onClick={async function(){await web3Module.mint(count)}}>Mint {count} Agent</button>
  </div>
 );
}

export default Minter;