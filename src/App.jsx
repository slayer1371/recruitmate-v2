import { BrowserRouter, Route, Routes } from "react-router";
import TrackandField from "./components/TrackandField";
import Football from "./components/Football";
import Signup from "./assets/SIgnup";
import Login from "./assets/Login";


export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element= {<TrackandField />} />
        <Route path = "/football" element = {<Football />} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/login" element = {<Login />} />

      </Routes>
    </BrowserRouter>    
    </>
    
    
  );
}
