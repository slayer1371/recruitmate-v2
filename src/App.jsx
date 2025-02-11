import { BrowserRouter, Route, Routes } from "react-router";
import TrackandField from "./components/TrackandField";
import Football from "./components/Football";
import Login from "./assets/Login";
import Signup from "./assets/Signup";
// import Blog from "./assets/Blog";
import InputForm from "./assets/InputForm";
import { Analytics } from "@vercel/analytics/react";
import ConferenceList from "./assets/Resources/Resources-tnf";
import Resourcesft from "./assets/Resources/Resources-fb";
import Teamtnf from "./assets/Teams/Team-tnf";
import Teamfb from "./assets/Teams/Team-ft";

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
        <Route path = "/team-track-and-field" element = {<Teamtnf />} />
        <Route path = "/team-football" element = {<Teamfb />} />
        {/* <Route path = "/blog" element = {<Blog />} /> */}
        <Route path = "/info" element = {<InputForm />} />
        <Route path = "/resources-track-and-field" element = {<ConferenceList />} />
        <Route path = "/resources-football" element = {<Resourcesft />} />
      </Routes>
    </BrowserRouter>    
    </>
    
    
  );
}
