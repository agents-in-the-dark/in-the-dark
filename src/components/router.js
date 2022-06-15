import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useAuth } from "./authContext";
import ConnectedRoute from "./connected/connectedRoot";
import UnconnectedRoot from "./unconnected/unconnectedRoot";

export default function AuthRouter (prop) {
  const authState = useAuth();
  console.log(authState[0]);
   
  return (
    <BrowserRouter>
      <Routes>
       <Route path='*' element={authState[0] ? <ConnectedRoute/>:<UnconnectedRoot/>}/>
      </Routes>
    </BrowserRouter>
  )
}