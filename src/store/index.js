import { use } from "react";
import { create } from "zustand";

const useMacBookStore = create((set) => ({
    color: '#2c2e2c',
    setColor: (color) => set({ color }),

    scale: .08,
    setScale: (scale) => set({ scale }),

    reset: () => set({
        color: '#2c2e2c',
        scale: .08,
    }),
}))

export default useMacBookStore;