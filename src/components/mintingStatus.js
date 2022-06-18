import { useEffect, useState } from "react"
import { web3Module } from "./authContext"

export default function MintingStatus(){
  const [supplyState, setSupplyState] = useState({supply: 0, freeMinting: false});
   
  // use effect to get minting status
  useEffect(()=>{
    const loadSupplyState = async function(){
      if(web3Module != null){
        await web3Module.getContractIntance()
        setSupplyState({supply: web3Module.supply, freeMinting: false})
      }
    }
    loadSupplyState();
  }, []);


  return(
    <div>
      {supplyState.freeMinting > 0 ? <div className="title">{1000 - supplyState.supply} freemints left</div> : <div className="title">{5000 - supplyState.supply} agents left</div>}
    </div>
  )
}