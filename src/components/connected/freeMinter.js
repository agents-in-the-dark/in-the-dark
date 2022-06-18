import { useEffect, useState } from "react"
import { web3Module } from "../authContext";

export default function FreeMinter(prop){
  const [mintAble, setMintAble] = useState(true)
   
  useEffect(()=>{
    if(prop.status.mintsAllowed < 1){setMintAble(false)}
  }, []);
   
  const requestMint = async function(){
    await web3Module.freeMint();
  }

  return(
    <div className="fillWidth flex flexColumn flexAlignCenter flexJustifyCenter">
      <div style={{height: "2em"}}></div>
      {mintAble ? <button className="whiteButton" onClick={requestMint}>Mint Agent</button> : <button className="whiteButtonDisabled">Mint Agent</button> }
      {mintAble ? null : <div>no more mints allowed</div>}
    </div>
  )
}