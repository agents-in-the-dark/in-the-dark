import MintingStatus from "./mintingStatus";

console.log('v1034');

function Title() {
 return (  
  <div className="fillWidth flex flexColumn flexAlignCenter">
    <div className="flex flexAlignCenter flexColumn">
      <div style={{position: 'relative', top: '1.5em'}}>In the</div>
      <h1 className="font mainTitle">Darkness</h1>
      <div style={{position: 'relative', top: '-1.5em'}}>we rise</div>
    </div>
    <MintingStatus></MintingStatus>
    <div className="mainParagraph">
      <div>5000 shrouded agents in total</div>
      <div>The first 1000 mints are free</div>
      <div>Capped at 1 mint /wallet</div>
      <div style={{height: "1em"}}></div>
      <div>then</div>
      <div style={{height: "1em"}}></div>
      <div>0.005 eth / mint afterwards</div>
      <div>Capped 10 mints / wallet</div>
    </div>
    <button className="openseaLink" onClick={function(){window.open('https://opensea.io/collection/agentsofdarkness')}} >Open gallery in Opensea</button>
  </div>
 );
}

export default Title;