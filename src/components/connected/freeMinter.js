import { useEffect, useState } from "react"

export default function FreeMinter(prop){
  const [mintAble, setMintAble] = useState(true)
   
  useEffect(()=>{
    if(prop.status.mintsAllowed < 1){setMintAble(false)}
  }, []);

  return(
    <div className="fillWidth flex flexColumn flexAlignCenter flexJustifyCenter">
      <div style={{height: "2em"}}></div>
      <button className={mintAble ? "whiteButton" : "whiteButtonDisabled"}>Mint Agent</button>
      {mintAble ? null : <div>no more mints alowed</div>}
    </div>
  )
}