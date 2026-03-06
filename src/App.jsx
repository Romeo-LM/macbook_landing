import Hero from "./components/hero";
import NavBar from "./components/NAvBar";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {

    return (
        <main>
            <NavBar/>
            <Hero/>
            <ProductViewer/>
        </main>
    )
}

export default App