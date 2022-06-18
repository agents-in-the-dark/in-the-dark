import { useEffect, useState } from 'react';
import {web3Module} from '../authContext';

const cost = 5000000000000000;
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function Minter(prop) {
  console.log('render mint counter'); 
  const [count, setCount] = useState(1); 
  const [able, setAble] = useState(true);
  const [max, setMax] = useState(10);
    
  useEffect(()=>{
    const load = async function(){
      await web3Module.getContractIntance();
       
      // get max mints
      const allowedMints = await web3Module.contract.methods.mintsLeft().call({from: web3Module.currentAccount});
      const currentMaxMints = clamp(web3Module.supply, 0, allowedMints);
      console.log(currentMaxMints);
       
      if(currentMaxMints < 1){setAble(false)}else{setMax(currentMaxMints)}
    }
    load()
    // // --- get var
    // const mintAllowed = prop.status.mintAllowed;
    // const supplyLeft = 5000 - prop.status.supply;
    // console.log(mintAllowed, supplyLeft);
    // // calculate mints Allowed
    // const currentMintsAllowed = clamp(supplyLeft, 0, mintAllowed)
    // // handle states
    // setMax(10);
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