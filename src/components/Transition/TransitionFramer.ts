import { Variants } from "motion";


export const fadeIn = (): Variants => {
    return {
        hidden: {
            y: 25,
            opacity: 0,
            x: 0,
            transition: {
                type: "tween" as const, 
                duration: 0.8,
                delay: 0.1,
                ease: "easeInOut",
            },
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween" as const,
                duration: 0.5,
                delay: 0.1,
                ease: [0.25, 0.25, 0.25, 0.75] as const,
            },
        },
    };
};