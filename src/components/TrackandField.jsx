// import Blog from "../assets/Blog";
import Cta from "../assets/Cta";
import Feature from "../assets/Feature";
import Footer from "../assets/Footer";
import Hero from "../assets/Heropage";
import Logoclouds from "../assets/Logoclouds";
import Newsletter from "../assets/Newsletter";
// import Team from "../assets/Team";
import Testimonials from "../assets/Testimonials";
import {Fade} from "react-awesome-reveal";

export default function TrackandField(){
    return <>
    <Hero video = "/videos/trackfield.mp4" sport = "Football" linkto = "/football" start_time = {25} />
    <Fade cascade damping={0.05}>
    <Feature />
    <Cta heading = "" text = "" />
    <Newsletter />
    {/* <Team /> */}
    {/* <Blog /> */}
    <Testimonials />
    <Logoclouds />
    <Footer />
    </Fade>

    </>
}