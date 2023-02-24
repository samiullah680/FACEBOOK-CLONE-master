import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./COMPONENTS/Login";
import Navbar from "./COMPONENTS/Navbar";
import Signup from "./COMPONENTS/Signup";
import Home from "./COMPONENTS/Home";
import MyProfile from "./COMPONENTS/MyProfile";
import CreatePost from "./COMPONENTS/CreatePost";
import Friends from "./COMPONENTS/Friends";


function App() {
  return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login/>}></Route>
         <Route path="/Signup" element={<Signup/>}></Route>
         <Route path="/Navbar" element={<Navbar/>}></Route>
         <Route path="/Home" element={<Home/>}></Route>
         <Route path="/Friends" element={<Friends/>}></Route>
         <Route path="/MyProfile" element={<MyProfile/>}></Route>
         <Route path="/CreatePost" element={<CreatePost/>}></Route>
       </Routes>
     </BrowserRouter>
  );
}

export default App;
