import ConnectWalletPrompt from './connectWalletPrompt';

function UnconnectedRoot() {
 return (
  <div className='flex flexColumn flexAlignCenter padding'>
   <ConnectWalletPrompt/>
  </div>
 );
}
export default UnconnectedRoot