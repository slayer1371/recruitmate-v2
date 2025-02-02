// import Blog from "../assets/Blog";
import Cta from "../assets/Cta";
import Bento from "../assets/Bento";
import Footer from "../assets/Footer";
import Hero from "../assets/Heropage";
import Logoclouds from "../assets/Logoclouds";
import Newsletter from "../assets/Newsletter";
// import Team from "../assets/Team";
// import Testimonials from "../assets/Testimonials";
import { Fade } from "react-awesome-reveal";

export default function Football(){
    return <>
    <Hero video = "/videos/football.mp4" sport = "Track-Field" linkto = "/" start_time = {0}/>
    <Fade cascade damping={0.08}>
    <Bento />
    <Cta heading = "Don’t Rely on a Hail Mary—Build Your Game Plan Now" text = "RecruitMate gives you the playbook — straight from current college football players and NFL athletes who know what it takes to get recruited." />
    {/* <Team /> */}
    {/* <Blog /> */}
    {/* <About /> */}

    <Newsletter />
    {/* <Testimonials /> */}
    <Logoclouds />
    <Footer />
    </Fade>
    </>
}