import AuthContext from "./components/authContext";
import Banner from "./components/banner";
import Title from "./components/title";
import RecentMints from "./components/recentMints";

function MainContainer() {
 return (
  <div className=" fillWidth mainContainerRoot">
   <div className="  mainContainer">
    {/* { hero banner} */}
    <Banner className="fillWidth"></Banner>

    
    {/* {main content} */}
    <div className="offset">
        {/* {main title and paragraph} */}
        <Title/>
        {/* {router and auth context} */}
        <AuthContext/>
        <div style={{height: "5em"}}></div>
    </div>
   </div>
  </div>
 );
}

export default MainContainer;