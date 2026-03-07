import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';
import { useRef } from 'react';

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const sectionRefShowcase = useRef();

    useGSAP(() => {
        if (!isTablet) {

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRefShowcase.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                    invalidateOnRefresh: true,
                    //markers: true,
                }
            });

            timeline.to('.mask img', {
                scale: 1.1,
            }).to('.content', {
                opacity: 1,
                y: 0,
                ease: 'power1.in'
            });
        }
    }, { dependencies: [isTablet], scope: sectionRefShowcase })

    return (
        <section id="showcase" ref={sectionRefShowcase}>
            <div className="media max-h-screen">
                <video src="./videos/large.mp4" loop muted autoPlay playsInline />
                <div className="mask w-full">
                    <img src="./mask-logo.svg" className='w-full h-full object-cover'/>
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing {" "}
                                <span className="text-white">
                                    M4, the next generation of Apple Silicon
                                </span>
                                . M4 powers
                            </p>
                            <p>
                                It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that’s unbelievably thin, light, and powerful.
                            </p>
                            <p>
                                A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.
                            </p>
                            <a className="text-primary">Learn more about Apple Intelligence</a>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4x faster</h3>
                            <p>pro rendering performance than M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>1.5x faster</h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Showcase