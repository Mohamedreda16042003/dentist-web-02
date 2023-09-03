import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";

import { SlSocialInstagram } from "react-icons/sl";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-blue-100 py-[40px]">
            <div className="max-w-[1380px] mx-auto px-[30px] grid gap-y-[50px] gap-x-[50px] lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="">
                    <div className="">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                width={80}
                                height={80}
                                alt=""
                            />
                        </Link>
                    </div>
                    <p className="text-black/70 text-[20px] mt-2">
                        مركز النخبة لطب وتقويم الأسنان هو مركز رائد في مجال
                        الرعاية الصحية الفموية والأسنان.
                    </p>
                    <div className="flex gap-3 mt-5 items-center">
                        <Link
                            href={"/"}
                            className="p-[3px] bg-blue-500 rounded-full">
                            <TiSocialFacebook
                                size={30}
                                className="text-white"
                            />
                        </Link>
                        <Link
                            href={"/"}
                            className="p-[8px] bg-red-500 rounded-full">
                            <SlSocialYoutube size={22} className="text-white" />
                        </Link>
                        <Link
                            href={"/"}
                            className="p-[8px] bg-pink-600 rounded-full">
                            <SlSocialInstagram size={22} color="white" />
                        </Link>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-[28px] font-semibold">روابط سريعة</h2>
                    <ul className="mt-5 flex flex-col gap-3">
                        <li>
                            <Link
                                href={"/"}
                                className="text-[20px] font-medium hover:text-blue-500 transition duration-100">
                                الرئيسية
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="text-[20px] font-medium hover:text-blue-500 transition duration-100">
                                عن المركز
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="text-[20px] font-medium hover:text-blue-500 transition duration-100">
                                الفريق الطبي
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="text-[20px] font-medium hover:text-blue-500 transition duration-100">
                                نتائج الفينيرز
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="text-[20px] font-medium hover:text-blue-500 transition duration-100">
                                نتائج زراعة الاسنان
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="text-[20px] font-medium hover:text-blue-500 transition duration-100w-full">
                                المقالات
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="text-[20px] font-medium hover:text-blue-500 transition duration-100w-full">
                                فديوهات
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="text-[20px] font-medium hover:text-blue-500 transition duration-100w-full">
                                اتصل بنا
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-[28px] font-semibold">التخصصات</h2>
                    <ul className="mt-5 flex flex-col gap-4">
                        <li>
                            <Link
                                href={"/"}
                                className="text-[20px] font-medium hover:text-blue-500 transition duration-100">
                                علاج جزور الأسنان
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="text-[20px] font-medium hover:text-blue-500 transition duration-100">
                                طب أسنان الأطفال
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="text-[20px] font-medium hover:text-blue-500 transition duration-100">
                                زراعة الأسنان
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="text-[20px] font-medium hover:text-blue-500 transition duration-100">
                                تقويم الأسنان
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="text-[20px] font-medium hover:text-blue-500 transition duration-100">
                                تجميل الأسنان
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="text-[20px] font-medium hover:text-blue-500 transition duration-100w-full">
                                التركيبات الثابتة
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-[28px] font-semibold">إتصل بنا</h2>
                    <div className="mt-5 flex gap-2">
                        <div className="">
                            <MdLocationPin
                                size={30}
                                className="text-blue-500"
                            />
                        </div>
                        <div className="">
                            <h2 className="text-[20px] mb-2">فرع المفارق</h2>
                            <p>
                                الزقازيق - المفارق نهاية شارع المحافظة -أمام
                                السجل المدني برج قصر الحياة الدور الثاني
                            </p>
                            <p className="mt-2">01111496647 - 0552313649</p>
                        </div>
                    </div>
                    <div className="mt-5 flex gap-2">
                        <div className="">
                            <MdLocationPin
                                size={30}
                                className="text-blue-500"
                            />
                        </div>
                        <div className="">
                            <h2 className="text-[20px] mb-2">فرع المحطة</h2>
                            <p>
                                الزقازيق - شارع الجلاء ( المحطة) - بجواز بنزينة
                                أبو عزيزة - أعلي صيدلية د.محمد حسانين - الدور
                                العاشر
                            </p>
                            <p className="mt-2">01113979701</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
