import {web3Module, Web3Module} from './authContext';
import Thumbnail from './thumbnail';

function RecentMints() {
 return (
  <div className="recentMints flex flexColumn flexAlignCenter">
   {/*recent mints*/}
   <div className="title">Recent Mints</div>
   {/*gallery thumbnail*/}
   <div className='recentMintsGallery'>
    <Thumbnail/>
   </div>
   {/*link to open sea*/}
  </div>
 );
}

export default RecentMints;