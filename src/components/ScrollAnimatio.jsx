// components/ScrollAnimation.js
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollAnimation = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation once when it comes into view
        threshold: 0.5, // Adjust this value to control when the animation triggers
    });

    useEffect(() => {
        if (inView) {
            // Start the animation when the element is in view
            controls.start({
                opacity: 1,
                y: 0,
            });
        }
    }, [controls, inView]);

    return <div ref={ref}>{children({ controls })}</div>;
};

export default ScrollAnimation;
