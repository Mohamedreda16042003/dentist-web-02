import Image from "next/image";
import heroImg from "../../public/hero.jpg";

export default function Home() {
    return (
        <main>
            <div className="">
                <div className="">
                    <Image
                        src={heroImg}
                        className="w-[100%] object-cover h-[92vh]"
                    />
                </div>
                <div className="max-w-[1380px] mx-auto px-[30px]">
                    <div className="flex flex-col items-center lg:flex-row mt-[80px] gap-[70px]">
                        <div className="text-start">
                            <h1 className="text-[40px] font-semibold mb-5">
                                مركز النخبة لطب وتقويم الأسنان
                            </h1>
                            <p className="text-[20px] leading-9">
                                مركز النخبة لطب وتقويم الأسنان هو مركز رائد في
                                مجال الرعاية الصحية الفموية والأسنان، والذي يقدم
                                خدمات متكاملة وعالية الجودة في مدينة الزقازيق.
                                يعتبر مركز النخبة مكانًا متخصصًا للعناية بصحة
                                وجمال الأسنان، حيث يتضمن فريقًا مؤهلاً من
                                الأطباء والمتخصصين في مجالات متعددة مثل طب
                                الأسنان العام، و طب اسنان الاطفال، وتقويم
                                الأسنان.
                            </p>
                        </div>
                        <div className="w-[95%] lg:w-auto">
                            <iframe
                                className="rounded-xl h-[300px] w-full lg:w-[600px] lg:h-[340px]"
                                src="https://www.youtube.com/embed/ghNnN3Pj1Ak?si=uQ-itsP3UtcH21E1"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
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
                                <div className="p-[25px] bg-white rounded-md">
                                    <h3 className="font-semibold text-[20px] mb-2">
                                        زراعة الأسنان
                                    </h3>
                                    <p className="text-black/80 leading-7">
                                        يُطلق البعض على زراعة الأسنان أنها
                                        السِحر الخاص بعالم طب الأسنان، وذلك لما
                                        هنالك من مميزات وفوائد جمّة تقدمها
                                        الزراعة، ولكن ماذا عن زراعة الفك العلوي
                                        بالتحديد؟
                                    </p>
                                </div>
                                <div className="p-[25px] bg-white rounded-md">
                                    <h3 className="font-semibold text-[20px] mb-2">
                                        تجميل الأسنان
                                    </h3>
                                    <p className="text-black/80 leading-7">
                                        هل تعانون من مشكلة اصفرار الاسنان؟ هل
                                        تزعجكم التغيرات الواضحة في لون أسنانكم
                                        عن الطبيعي؟ هل تبحثون عن طرق لعلاج
                                        تصبغات الاسنان والتخلص منها؟
                                    </p>
                                </div>
                                <div className="p-[25px] bg-white rounded-md">
                                    <h3 className="font-semibold text-[20px] mb-2">
                                        علاج جذور الأسنان
                                    </h3>
                                    <p className="text-black/80 leading-7">
                                        هل تعانون من مشكلة اصفرار الاسنان؟ هل
                                        تزعجكم التغيرات الواضحة في لون أسنانكم
                                        عن الطبيعي؟ هل تبحثون عن طرق لعلاج
                                        تصبغات الاسنان والتخلص منها؟
                                    </p>
                                </div>
                                <div className="p-[25px] bg-white rounded-md">
                                    <h3 className="font-semibold text-[20px] mb-2">
                                        التركيبات الثابتة
                                    </h3>
                                    <p className="text-black/80 leading-7">
                                        يُطلق البعض على زراعة الأسنان أنها
                                        السِحر الخاص بعالم طب الأسنان، وذلك لما
                                        هنالك من مميزات وفوائد جمّة تقدمها
                                        الزراعة، ولكن ماذا عن زراعة الفك العلوي
                                        بالتحديد؟
                                    </p>
                                </div>
                                <div className="p-[25px] bg-white rounded-md">
                                    <h3 className="font-semibold text-[20px] mb-2">
                                        تقويم الأسنان
                                    </h3>
                                    <p className="text-black/80 leading-7">
                                        يعد تقويم الأسنان من أهم إجراءات الأسنان
                                        التجميلية والعلاجية في نفس الوقت،
                                        ويتساءل الكثير من الناس ما هو أفضل تقويم
                                        اسنان؟ وكيف يمكن اختياره؟
                                    </p>
                                </div>
                                <div className="p-[25px] bg-white rounded-md">
                                    <h3 className="font-semibold text-[20px] mb-2">
                                        طب أسنان الأطفال
                                    </h3>
                                    <p className="text-black/80 leading-7">
                                        هل تعانون من مشكلة اصفرار الاسنان؟ هل
                                        تزعجكم التغيرات الواضحة في لون أسنانكم
                                        عن الطبيعي؟ هل تبحثون عن طرق لعلاج
                                        تصبغات الاسنان والتخلص منها؟
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
