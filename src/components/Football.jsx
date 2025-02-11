// import Blog from "../assets/Blog";
import Cta from "../assets/Cta";
// import Bento from "../assets/Bento";
import Footer from "../assets/Footer";
import Hero from "../assets/Heropage";
import Logoclouds from "../assets/Logoclouds";
import Newsletter from "../assets/Newsletter";
// import Team from "../assets/Team";
// import Testimonials from "../assets/Testimonials";
import { Fade } from "react-awesome-reveal";
import Feature from "../assets/Feature";

export default function Football(){
    return <>
    <Hero heading = "From Friday Night Lights to Scholarship Offers" video = "/videos/football_converted.mp4" sport = "Track-Field" linkto = "/" res = "/resources-football" team = "/team-football" start_time = {0}/>
    <Fade cascade damping={0.08}>
    <Feature header = "Find the Right Fit and Secure your Spot" subheader = "" content = "Get a step-by-step game plan to target the right schools, understand what coaches want at your position, and track your progress to stay on top of key deadlines." />
    {/* <Bento /> */}
    <Cta heading = "Don’t Rely on a Hail Mary—Build Your Game Plan Now" text = "RecruitMate gives you the playbook — straight from current college football players and NFL athletes who know what it takes to get recruited." />
    <Feature header = "Get Noticed & Stand Out" subheader = "" content = "The right message gets you on a coach’s radar fast. Learn how to reach out using email, Hudl, and social media with proven strategies that grab attention and keep you on their list." />
    {/* <Team /> */}
    {/* <Blog /> */}
    {/* <About /> */}

    <Newsletter heading = "Don’t Rely on a Hail Mary—Get Started Now" subheader = "Limited spots available. Secure yours today." />
    {/* <Testimonials /> */}
    <Logoclouds />
    <Footer />
    </Fade>
    </>
}