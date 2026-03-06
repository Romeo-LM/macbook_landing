import useMacBookStore from "../store"
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import MacBookModel14 from "./models/Macbook-14"

import StudioLight from "./three/StudioLight";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";

const ProductViewer = () => {

    const { color, scale, setColor, setScale } = useMacBookStore();

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    return (
        <section id="product-viewer">

            <h2>Take a closer look.</h2>

            <div className="controls">
                {/* <p className="info">MacBook Pro | Disponible en 16" & 14" en Noir sidéral & Argent</p> */}
                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        <div
                            onClick={() => setColor('#adb5bd')}
                            className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}
                        />
                        <div
                            onClick={() => setColor('#2c2e2c')}
                            className={clsx('bg-neutral-900', color === '#2c2e2c' && 'active')}
                        />
                    </div>

                    <div className="size-control">
                        <div
                            onClick={() => setScale(.06)}
                            className={clsx(scale === .06 ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>14"</p>
                        </div>
                        <div
                            onClick={() => setScale(.08)}
                            className={clsx(scale === .08 ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>

            </div>

            <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: .1, far: 100 }}>
                <ModelSwitcher scale={isMobile ? scale - .03 : scale} isMobile={isMobile} />

                <StudioLight />
            </Canvas>
        </section>
    )
}

export default ProductViewer