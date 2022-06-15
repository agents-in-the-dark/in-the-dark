import Web3 from "web3/dist/web3.min";
const contractJson = require('./Ninjacks.json');



export default class Web3Module{
 constructor(provider){
  // initialize web3
  this.web3 = new Web3(provider);
   
  // --- wallet stuff
  // create state variables
  this.currentAccount = null;
  // create function to call on wallet change
  this.onWalletStatusChanged = null;
  // listen to wallet connection changes
  window.ethereum.on('accountsChanged', (accounts)=>{
   this.currentAccount = accounts[0]
   // call wallet status chagned event
   if(this.onWalletStatusChanged != null){
    this.onWalletStatusChanged(this.currentAccount);
   }
  });

  // minting variables
  this.mintsLeft = null;
  this.supplyLeft = null;
  this.freeMinting = null;
   
  // get contact instance
  this.contract = null;
  this.getContractIntance();
 }
  
 async connectWallet(){
  // reach into metamask and ask for wallet
  const address = await window.ethereum.request({method: 'eth_requestAccounts'});
  this.currentAccount = address[0];
  if(this.onWalletStatusChanged != null){
   this.onWalletStatusChanged(this.currentAccount);
  }
 }

 async getContractIntance(){
  // get network id
  const id = await this.web3.eth.net.getId();
  // get network
  const deployedNetwork = contractJson.networks[id];
  // set contract instance
  const contract = await new this.web3.eth.Contract(contractJson.abi, deployedNetwork.address);
  this.contract = contract;
   
  // --- get minting variables
  // allowed mints left
  this.mintsLeft = await this.contract.methods.mintsLeft().call();
  // ninjacks left
  const numberMinted = await this.contract.methods.totalSupply().call();
  this.supplyLeft = 5000 - numberMinted;
 }
  
 async mint(num){
  console.log("mint called");
  const receipt = await this.contract.methods.mint(num).send({from: this.currentAccount, value: 0});
  console.log(receipt);
  console.log("successfully minted");
 }
}