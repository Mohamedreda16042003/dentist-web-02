"use client";
import { useEffect, useRef } from "react";

const TitleHero = () => {
    const animationRef = useRef();

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (animationRef.current) {
    //             const { offsetTop } = animationRef.current;
    //             if (window.scrollY >= offsetTop - 600) {
    //                 animationRef.current.clas;

    //                 sList.add("opacity-100", "translate-y-[0px]");
    //             }
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <div
            className="text-center opacity-0 transition duration-1000 translate-y-[100px]"
            ref={animationRef}>
            <h1 className="text-[40px] font-semibold mb-5">
                مركز النخبة لطب وتقويم الأسنان
            </h1>
            <p className="text-[20px] leading-9">
                مركز النخبة لطب وتقويم الأسنان هو مركز رائد في مجال الرعاية
                الصحية الفموية والأسنان، والذي يقدم خدمات متكاملة وعالية الجودة
                في مدينة الزقازيق. يعتبر مركز النخبة مكانًا متخصصًا للعناية بصحة
                وجمال الأسنان، حيث يتضمن فريقًا مؤهلاً من الأطباء والمتخصصين في
                مجالات متعددة مثل طب الأسنان العام، و طب اسنان الاطفال، وتقويم
                الأسنان.
            </p>
        </div>
    );
};

export default TitleHero;
