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
    <Hero heading = "Your Path to College Track Starts Here" video = "/videos/trackfield.mp4" sport = "Football" linkto = "/football" start_time = {25} />
    <Fade cascade damping={0.05}>
    <Feature header = "Learn from Those Who&apos;ve Done It" subheader = "" content = "Gain insights from current college athletes who’ve successfully navigated the recruiting process, providing mentorship and real-world advice to set you up for success." />
    <Cta heading = "Know Where to Start?" text = "" />
    <Feature header = "Say the Right Thing. Empower Your Future." subheader = "" content = "RecruitMate equips athletes with pre-made email templates and communication tips, ensuring their outreach to coaches is professional, confident, and effective."/>
    <Newsletter heading = "Sign up now for early access!" subheader = "Start Your Journey to Success Today!" />
    {/* <Team /> */}
    {/* <Blog /> */}
    <Testimonials />
    <Logoclouds />
    <Footer />
    </Fade>

    </>
}