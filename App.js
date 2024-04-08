
import LoginPage from "./components/LoginPage";
import Profile1 from "./components/Profile1";
import Profile2 from "./components/Profile2";
import Mail from "./components/Mail";

import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
     <Route path="/" element={<LoginPage></LoginPage> }></Route>
     <Route path="/profilepage1" element={ <Profile1></Profile1> }></Route>
     <Route path="/profilepage2" element={ <Profile2></Profile2> }></Route>
     <Route path="/fullpage" element={ <Mail></Mail>}></Route>
    
   
   </Routes>
    </div>
    
  );
}

export default App;
