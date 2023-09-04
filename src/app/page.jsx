"use client";
import heroImg from "../../public/hero.jpg";
import Image from "next/image";
import { AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
    const ref = useRef(null);
    const ref2 = useRef(null);

    const inView = useInView(ref, { once: true });
    const inView2 = useInView(ref2, { once: true });

    return (
        <AnimatePresence>
            <main>
                <div className="overflow-hidden">
                    <div>
                        <Image
                            src={heroImg}
                            alt=""
                            className="w-[100%] object-cover h-[92vh]"
                        />
                    </div>
                    <div className="max-w-[1380px] mx-auto px-[30px]">
                        <div className="flex flex-col items-center lg:flex-row mt-[80px] gap-[70px]">
                            <div
                                ref={ref}
                                className={`text-center opacity-0 translate-y-[100px] transition duration-700`}
                                style={{
                                    opacity: inView ? 1 : 0,
                                    transform: inView ? "translateY(0)" : "",
                                }}>
                                <h1 className="text-[40px] font-semibold mb-5">
                                    مركز النخبة لطب وتقويم الأسنان
                                </h1>
                                <p className="text-[20px] leading-9">
                                    مركز النخبة لطب وتقويم الأسنان هو مركز رائد
                                    في مجال الرعاية الصحية الفموية والأسنان،
                                    والذي يقدم خدمات متكاملة وعالية الجودة في
                                    مدينة الزقازيق. يعتبر مركز النخبة مكانًا
                                    متخصصًا للعناية بصحة وجمال الأسنان، حيث
                                    يتضمن فريقًا مؤهلاً من الأطباء والمتخصصين في
                                    مجالات متعددة مثل طب الأسنان العام، و طب
                                    اسنان الاطفال، وتقويم الأسنان.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-100 my-[80px]">
                        <div className="max-w-[1380px] mx-auto px-[30px]">
                            <div className="py-[40px]">
                                <h1 className="flex justify-center text-[40px] font-semibold pb-[30px]">
                                    الخدمات
                                </h1>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                                    <div
                                        ref={ref2}
                                        className={`p-[25px] bg-white rounded-md opacity-0 translate-y-[100px] transition duration-500 ${
                                            inView2
                                                ? "opacity-100 translate-y-[0px]"
                                                : ""
                                        }`}>
                                        <h3 className="font-semibold text-[20px] mb-2">
                                            زراعة الأسنان
                                        </h3>
                                        <p className="text-black/80 leading-7">
                                            يُطلق البعض على زراعة الأسنان أنها
                                            السِحر الخاص بعالم طب الأسنان، وذلك
                                            لما هنالك من مميزات وفوائد جمّة
                                            تقدمها الزراعة، ولكن ماذا عن زراعة
                                            الفك العلوي بالتحديد؟
                                        </p>
                                    </div>
                                    <div
                                        className={`p-[25px] bg-white rounded-md opacity-0 translate-y-[100px] transition duration-500 delay-100 ${
                                            inView2
                                                ? "opacity-100 translate-y-[0px]"
                                                : ""
                                        }`}>
                                        <h3 className="font-semibold text-[20px] mb-2">
                                            تجميل الأسنان
                                        </h3>
                                        <p className="text-black/80 leading-7">
                                            هل تعانون من مشكلة اصفرار الاسنان؟
                                            هل تزعجكم التغيرات الواضحة في لون
                                            أسنانكم عن الطبيعي؟ هل تبحثون عن طرق
                                            لعلاج تصبغات الاسنان والتخلص منها؟
                                        </p>
                                    </div>
                                    <div
                                        className={`p-[25px] bg-white rounded-md opacity-0 translate-y-[100px] transition duration-500 delay-150 ${
                                            inView2
                                                ? "opacity-100 translate-y-[0px]"
                                                : ""
                                        }`}>
                                        <h3 className="font-semibold text-[20px] mb-2">
                                            علاج جذور الأسنان
                                        </h3>
                                        <p className="text-black/80 leading-7">
                                            هل تعانون من مشكلة اصفرار الاسنان؟
                                            هل تزعجكم التغيرات الواضحة في لون
                                            أسنانكم عن الطبيعي؟ هل تبحثون عن طرق
                                            لعلاج تصبغات الاسنان والتخلص منها؟
                                        </p>
                                    </div>
                                    <div
                                        className={`p-[25px] bg-white rounded-md opacity-0 translate-y-[100px] transition duration-500 delay-200 ${
                                            inView2
                                                ? "opacity-100 translate-y-[0px]"
                                                : ""
                                        }`}>
                                        <h3 className="font-semibold text-[20px] mb-2">
                                            التركيبات الثابتة
                                        </h3>
                                        <p className="text-black/80 leading-7">
                                            يُطلق البعض على زراعة الأسنان أنها
                                            السِحر الخاص بعالم طب الأسنان، وذلك
                                            لما هنالك من مميزات وفوائد جمّة
                                            تقدمها الزراعة، ولكن ماذا عن زراعة
                                            الفك العلوي بالتحديد؟
                                        </p>
                                    </div>
                                    <div
                                        className={`p-[25px] bg-white rounded-md opacity-0 translate-y-[100px] transition duration-500 delay-300 ${
                                            inView2
                                                ? "opacity-100 translate-y-[0px]"
                                                : ""
                                        }`}>
                                        <h3 className="font-semibold text-[20px] mb-2">
                                            تقويم الأسنان
                                        </h3>
                                        <p className="text-black/80 leading-7">
                                            يعد تقويم الأسنان من أهم إجراءات
                                            الأسنان التجميلية والعلاجية في نفس
                                            الوقت، ويتساءل الكثير من الناس ما هو
                                            أفضل تقويم اسنان؟ وكيف يمكن اختياره؟
                                        </p>
                                    </div>
                                    <div
                                        className={`p-[25px] bg-white rounded-md opacity-0 translate-y-[100px] transition duration-500 delay-500 ${
                                            inView2
                                                ? "opacity-100 translate-y-[0px]"
                                                : ""
                                        }`}>
                                        <h3 className="font-semibold text-[20px] mb-2">
                                            طب أسنان الأطفال
                                        </h3>
                                        <p className="text-black/80 leading-7">
                                            هل تعانون من مشكلة اصفرار الاسنان؟
                                            هل تزعجكم التغيرات الواضحة في لون
                                            أسنانكم عن الطبيعي؟ هل تبحثون عن طرق
                                            لعلاج تصبغات الاسنان والتخلص منها؟
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AnimatePresence>
    );
}
