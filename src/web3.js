import Web3 from "web3/dist/web3.min";
const contractAbi =  require('./contractAbi');


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
  this.supply = null;
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
  // set contract instance
  const contract = await new this.web3.eth.Contract(contractAbi, '0x9D4d4A3695944cC68c796B9044cD3dE9fEebFcaf');
  this.contract = contract;
  console.log(contract);
   
  // --- get minting variables
  // ninjacks left
  const numberMinted = await this.contract.methods.totalSupply().call();
  this.supply = numberMinted;
  if(numberMinted >= 1000){this.freeMinting = false;}else{this.freeMinting = true}
 }
  
 async mint(num, ethToSend){
  console.log("mint called");
  const receipt = await this.contract.methods.mint(num).send({from: this.currentAccount, value: ethToSend});
  console.log(receipt);
  console.log("successfully minted");
  alert('Successfully Minted');
 }
  
 async getMintsAllowed(){
  return await this.contract.methods.mintsLeft().call({from: this.currentAccount});
 }
}