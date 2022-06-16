import { useEffect, useState } from 'react';
import {web3Module} from '../authContext';

const cost = 5000000000000000;
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function Minter(prop) {
  const [count, setCount] = useState(1); 
  const [able, setAble] = useState(true);
  const [max, setMax] = useState(10);
    
  useEffect(()=>{
    // --- get var
    const mintAllowed = prop.status.mintAllowed;
    const supplyLeft = 5000 - prop.status.supply;
    // calculate mints Allowed
    const currentMintsAllowed = clamp(supplyLeft, 0, mintAllowed)
    
    // handle states
    setMax(currentMintsAllowed);
    setAble(currentMintsAllowed > 0)
  },[]);

  const addCount = function(){
    const num = count;
    if(num >= max){
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
 
  if(able){
    return (
      <div className="flex flexColumn flexAlignCenter">
        <div style={{height: '2em'}}></div>
      <div className='counter flex flexaAlignCenter flexJustifyCenter'>
        <button onClick={subtractCount} className='counterButtons'>-</button>
        <div style={{position: 'relative', top:'0.1em'}}>{count}</div>
        <button onClick={addCount} className='counterButtons'>+</button>
      </div>
      <button className="whiteButton" onClick={async function(){await web3Module.mint(count, count*cost)}}>Mint {count} Agent</button>
      </div>
    );
  }else{
    return (
      <div className="flex flexColumn flexAlignCenter">
        <div style={{height: "2em"}}></div>
        <button className="whiteButtonDisabled">Mint Agent</button>
        <div>no more mints allowed</div>
      </div>
    );
  }
}

export default Minter;