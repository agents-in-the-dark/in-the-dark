import { web3Module } from '../authContext';


const hasMetamask = window.ethereum;

function ConnectWalletPrompt() {

 if(hasMetamask){ // has metamask ready device
  return (
   <div className="flex flexColumn flexAlignCenter connectWalletPrompt">
    {/*Mint your own */}
    <button className='whiteButton' onClick={function(){web3Module.connectWallet()}}>Connect Metamask</button> 
   </div>
  );
 }else{// no metamask
  return(
   <div className="flex flexColumn flexAlignCenter connectWalletPrompt">
     <button className='whiteButtonDisabled' >Connect Metamask</button> 
     <div style={{width: "10rem", textAlign:"center"}}>Please use a browser with Metamask installed</div>
   </div>
  )
 } 
}

export default ConnectWalletPrompt;