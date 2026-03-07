import { use } from "react";
import { texture } from "three/tsl";
import { create } from "zustand";

const useMacBookStore = create((set) => ({
    color: '#2c2e2c',
    setColor: (color) => set({ color }),

    scale: .08,
    setScale: (scale) => set({ scale }),

    texture: './videos/feature-1.mp4',
    setTexture: (texture) => set({ texture }),

    reset: () => set({
        color: '#2c2e2c',
        scale: .08,
        texture: './videos/feature-1.mp4',
    }),
}))

export default useMacBookStore;