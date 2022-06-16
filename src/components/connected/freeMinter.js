import { useEffect, useState } from "react"
import { web3Module } from "../authContext";

export default function FreeMinter(prop){
  const [mintAble, setMintAble] = useState(true)
   
  useEffect(()=>{
    if(prop.status.mintsAllowed < 1){setMintAble(false)}
  }, []);

  return(
    <div className="fillWidth flex flexColumn flexAlignCenter flexJustifyCenter">
      <div style={{height: "2em"}}></div>
      <button className={mintAble ? "whiteButton" : "whiteButtonDisabled"} onClick={web3Module.mint(1, 0)}>Mint Agent</button>
      {mintAble ? null : <div>no more mints alowed</div>}
    </div>
  )
}