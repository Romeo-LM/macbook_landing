import { useRef, Suspense, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import clsx from 'clsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import StudioLight from './three/StudioLight'
import { features, featureSequence } from '../contantes'
import MacbookModel from './models/Macbook'
import useMacBookStore from '../store'

const ModelSroll = () => {
    const groupRef = useRef();
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const { setTexture } = useMacBookStore();

    //pre-load all video during componznt mount
    useEffect(() => {
        featureSequence.forEach((feature) => {
            const video = document.createElement('video');

            Object.assign(video, {
                src: feature.videoPath,
                muted: true,
                playsInline: true,
                preload: 'auto',
                crossOrigin: 'anonymous',
            })

            video.load();
        })
    }, []);

    useGSAP(() => {
        //3D model ratation animation
        const modelTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                pin: true,
                invalidateOnRefresh: true,
            }
        });

        //sync the feature content
        const contentTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top center',
                end: 'bottom top',
                scrub: true,
                invalidateOnRefresh: true,
            }
        })

        //3D spin
        if (groupRef.current) {
            modelTimeline.to(groupRef.current.rotation, {
                y: Math.PI * 2,
                ease: "power1.inOut",
            });
        }

        //content & texture sync
        contentTimeline
            .call(() => setTexture('./videos/feature-1.mp4'))
            .to('.box1', {
                opacity: 1,
                y: 0,
                delay: 1,
            })

            .call(() => setTexture('./videos/feature-2.mp4'))
            .to('.box2', {
            opacity: 1,
                y: 0,
            })

            .call(() => setTexture('./videos/feature-3.mp4'))
            .to('.box3', {
                opacity: 1,
                y: 0,
            })

            .call(() => setTexture('./videos/feature-4.mp4'))
            .to('.box4', {
                opacity: 1,
                y: 0,
            })

            .call(() => setTexture('./videos/feature-5.mp4'))
            .to('.box5', {
                opacity: 1,
                y: 0,
            })

    }, [])

    return (
        <group ref={groupRef}>
            <Suspense fallback={
                <Html>
                    <h1 className="text-white text-3xl">
                        Chargement ...
                    </h1>
                </Html>
            }>
                <MacbookModel scale={isMobile ? .05 : .08} position={[0, -1, 0]} />
            </Suspense>
        </group>
    )
}

const Features = () => {
    return (
        <section id="features">
            <h2>See it all in a new light</h2>

            <Canvas id="f-canvas" camera={{}} >
                <StudioLight />
                <ambientLight intensity={.5} />
                <ModelSroll />
            </Canvas>

            <div className="absolute inset-0">
                {features.map((feature, index) => (
                    <div className={clsx('box', `box${index + 1}`, feature.styles)}>
                        <img src={feature.icon} alt={feature.highlight} />
                        <p>
                            <span className="text-white">{feature.highlight}</span>
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features