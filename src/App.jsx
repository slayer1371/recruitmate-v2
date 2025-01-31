import { BrowserRouter, Route, Routes } from "react-router";
import TrackandField from "./components/TrackandField";
import Football from "./components/Football";


export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element= {<TrackandField />} />
        <Route path = "/football" element = {<Football />} />
      </Routes>
    </BrowserRouter>    
    </>
    
    
  );
}
