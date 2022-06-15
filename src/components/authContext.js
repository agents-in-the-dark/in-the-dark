import React, {useContext, useEffect, useState} from 'react';
import AuthRouter from './router';
import Web3Module from '../web3';

// --- web 3 init
export let web3Module = null;
if(window.ethereum != null){
  console.log("metamask found; initialising web3");
  web3Module = new Web3Module(window.ethereum);
}else{
  console.log("metamask not found")
}

// --- react stuff

export const Context = React.createContext();

export function useAuth(){
  return useContext(Context);
}

export default function AuthContext () {
  const authState = useState(null);
   
  // make state listen to wallet account chaanges
  if(web3Module){
    web3Module.onWalletStatusChanged = function(address){console.log("called status change"); authState[1](address)};
  }
   
  // put context handling code here
  return (
    <Context.Provider value={authState}>
     <AuthRouter/>
    </Context.Provider>
  )
}