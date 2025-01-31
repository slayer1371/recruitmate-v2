import Blog from "../assets/Blog";
import Cta from "../assets/Cta";
import Feature from "../assets/Feature";
import Footer from "../assets/Footer";
import Hero from "../assets/Heropage";
import Logoclouds from "../assets/Logoclouds";
import Newsletter from "../assets/Newsletter";
import Team from "../assets/Team";
import Testimonials from "../assets/Testimonials";
import {Fade} from "react-awesome-reveal";
// import trackfield from "../assets/videos/trackfield.mp4"

export default function TrackandField(){
    return <>
    <Hero video = "/videos/trackfield.mp4" sport = "Football" linkto = "/football" />
    <Fade cascade damping={0.08}>
    <Feature />
    <Cta />
    <Team />
    <Blog />
    <Newsletter />
    <Testimonials />
    <Logoclouds />
    <Footer />
    </Fade>

    </>
}