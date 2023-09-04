"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import heroImg from "../../public/hero.jpg";
import { useEffect, useRef } from "react";
const HeroImg = () => {
    // const imgAnimation = useRef();
    // useEffect(() => {
    //     imgAnimation.current.classList.add("translate-x-0", "opacity-100");
    // }, []);
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                }}>
                <Image
                    // ref={imgAnimation}
                    src={heroImg}
                    alt=""
                    className="w-[100%] object-cover h-[92vh] -translate-x-[100%] transition duration-1000 opacity-0"
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default HeroImg;
