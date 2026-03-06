import { useEffect } from "react";
import { useRef } from "react"

const Hero = () => {

    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>Macbook Pro</h1>
                <img src="./title.png" alt="MacBook" />
            </div>
            <video ref={videoRef} src="./videos/hero.mp4" autoPlay muted playsInline/>

            <button>Buy</button>

            <p>À partir 1599€ ou 150€ pendant 12 mois</p>
        </section>
    )
}

export default Hero