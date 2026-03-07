import Hero from "./components/hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Showcase from "./components/Showcase";
import Features from "./components/Features";
import Footer from "./components/Footer";
import PerformanceMac from "./components/PerformanceMac";
import Hightlights from "./components/Hightlights";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {

    useEffect(() => {
        // Rafraîchir quand toutes les images du site sont chargées
        window.addEventListener("load", () => ScrollTrigger.refresh());
        
        return () => window.removeEventListener("load", () => ScrollTrigger.refresh());
    }, []);

    return (
        <main>
            <NavBar/>
            <Hero/>
            <ProductViewer/>
            <Showcase/>
            <PerformanceMac/>
            <Features/>
            <Hightlights/>
            <Footer/>
        </main>
    )
}

export default App