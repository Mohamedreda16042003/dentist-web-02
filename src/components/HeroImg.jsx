"use client";

import Image from "next/image";
import heroImg from "../../public/hero.jpg";
import { useEffect, useRef } from "react";
const HeroImg = () => {
    const imgAnimation = useRef();
    useEffect(() => {
        imgAnimation.current.classList.add("translate-x-0", "opacity-100");
    }, []);
    return (
        <div className="">
            <Image
                ref={imgAnimation}
                src={heroImg}
                alt=""
                className="w-[100%] object-cover h-[92vh] -translate-x-[100%] transition duration-700 opacity-0"
            />
        </div>
    );
};

export default HeroImg;
