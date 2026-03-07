import { performanceImages, performanceImgPositions } from '../contantes'
import { useMediaQuery } from 'react-responsive'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const PerformanceMac = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const sectionRefPerformance = useRef();

    useGSAP(() => {
        //text animation
        gsap.fromTo(
            ".content p",
            {
                opacity: 0,
                y: 10,
            },
            {
                opacity: 1,
                y: 0,
                duration: .8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".content p",
                    start: "top bottom",
                    end: 'top center',
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            }
        );

        if (isMobile) return;

        const tl = gsap.timeline({
            defaults: { 
                ease: "power1.inOut",
                duration: 2,
                overwrite: "auto",
            },
            scrollTrigger: {
                trigger: sectionRefPerformance.current,
                start: "top bottom",
                end: "center center",
                scrub: 1,
                invalidateOnRefresh: true,
            }
        });

        performanceImgPositions.forEach((img) => {
            if (img.id == 'p5') return;

            const toVars = {};

            if(typeof img.left === "number") toVars.left = `${img.left}%`;
            if(typeof img.right === "number") toVars.right = `${img.right}%`;
            if(typeof img.bottom === "number") toVars.bottom = `${img.bottom}%`;
            if(typeof img.transform === "number") toVars.transform = `${img.transform}%`;

            tl.to(`.${img.id}`, toVars, 0);
        });
    }, { dependencies: [isMobile], scope: sectionRefPerformance })

    return (
        <section id="performance" ref={sectionRefPerformance}>
            <h2>Next-level graphics performance. Game on.</h2>

            <div className="wrapper">
                {performanceImages.map((img, index) => (
                    <img className={img.id} key={index} src={img.src} alt={img.alt || `Image de performance Mac #${index + 1}`} />
                ))}
            </div>

            <div className="content">
                <p>
                    Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="text-white">
                        gaming feels more immersive and realistic than ever.
                    </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
                </p>
            </div>
        </section>
    )
}

export default PerformanceMac