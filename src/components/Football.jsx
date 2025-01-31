import Blog from "../assets/Blog";
import Cta from "../assets/Cta";
import Bento from "../assets/Bento";
import Footer from "../assets/Footer";
import Hero from "../assets/Heropage";
import Logoclouds from "../assets/Logoclouds";
import Newsletter from "../assets/Newsletter";
import Team from "../assets/Team";
import Testimonials from "../assets/Testimonials";
import { Fade } from "react-awesome-reveal";

export default function Football(){
    return <>
    <Hero video = "https://github.com/slayer1371/recruitmate-v2/blob/main/src/assets/video/videoplayback.mp4" sport = "Track-Field" linkto = "/"/>
    <Fade cascade damping={0.08}>
    <Bento />
    <Cta />
    <Team />
    <Blog />
    {/* <About /> */}

    <Newsletter />
    <Testimonials />
    <Logoclouds />
    <Footer />
    </Fade>
    </>
}