import { BrowserRouter, Route, Routes } from "react-router";
import TrackandField from "./components/TrackandField";
import Football from "./components/Football";
import Login from "./assets/Login";
import Signup from "./assets/Signup";
import Team from "./assets/Team";
import Blog from "./assets/Blog";
import InputForm from "./assets/InputForm";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
            <Analytics />

    <BrowserRouter>
      <Routes>
        <Route path = "/" element= {<TrackandField />} />
        <Route path = "/football" element = {<Football />} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/team" element = {<Team />} />
        <Route path = "/blog" element = {<Blog />} />
        <Route path = "/info" element = {<InputForm />} />
      </Routes>
    </BrowserRouter>    
    </>
    
    
  );
}
