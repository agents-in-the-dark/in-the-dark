import Minter from './minter';
import FreeMinter from './freeMinter';
import {web3Module} from '../authContext';
import { useEffect, useState } from 'react';
 
function ConnectedRoute() {
  const [supplyStatus, SetSupplyStatus] = useState({
    freeMinting: false,
    mintsAllowed: 0,
    supplyLeft: 0
  });

 // load contract variables
 useEffect(()=>{
  const load = async function(){
    if(web3Module != null){
      await web3Module.getContractIntance();
      SetSupplyStatus({
        freeMinting: web3Module.freeMinting,
        mintsAllowed: await web3Module.getMintsAllowed(),
        supply: web3Module.supply
      })
    }
  };
  load()
 },[]);
  
 useEffect(()=>{console.log(supplyStatus)}, [supplyStatus])

  

 return (
  <div>
    {supplyStatus.freeMinting ? <FreeMinter status={supplyStatus}/> : <Minter status={supplyStatus}/>}
  </div>
 );
}

export default ConnectedRoute;