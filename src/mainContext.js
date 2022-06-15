import React, {useContext, useEffect, useState} from 'react';
import AuthRouter from './components/router';
import Web3Module from './web3';

// --- web 3 init
export let web3Module = null;
if(window.ethereum != null){
  console.log("metamask found; initialising web3");
  web3Module = new Web3Module(window.ethereum);
}else{
  console.log("metamask not found")
}

// --- react context stuff
export const Context = React.createContext();
export function useAuth(){
  return useContext(Context);
}

export default function AuthContext () {
  const [web3, setWeb3] = useState(null);
   
  // initialise web3
  useEffect(()=>{
    const initWeb3 = async ()=>{
      await web3Module.init();
      await setWeb3(web3Module);
      console.log(web3);
    };
    initWeb3();
  },[]);
   
  // put context handling code here
  return (
    <Context.Provider value={web3Module}>
     {/* <AuthRouter/> */}
    </Context.Provider>
  )
}