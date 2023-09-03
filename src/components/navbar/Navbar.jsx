import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className="h-[80px] shadow-sm sticky top-0 z-50 bg-white">
            <div className="flex justify-between pr-[40px] mx-auto items-center">
                <div className="logo w-[200px] h-[80px] flex justify-center">
                    <Link href="/">
                        <Image src="/logo.png" width={80} height={80} alt="" />
                    </Link>
                </div>
                <ul className="font-semibold flex gap-10">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-blue-400 transition duration-100">
                            الرئيسية
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="hover:text-blue-400 transition duration-100">
                            عن المركز
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={""}
                            className="hover:text-blue-400 transition duration-100">
                            الفريق الطبي
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={""}
                            className="hover:text-blue-400 transition duration-100">
                            التخصصات
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={""}
                            className="hover:text-blue-400 transition duration-100">
                            نتائج الحالات
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={""}
                            className="hover:text-blue-400 transition duration-100">
                            المقالات
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={""}
                            className="hover:text-blue-400 transition duration-100">
                            فديوهات
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={""}
                            className="hover:text-blue-400 transition duration-100">
                            اتصل بنا
                        </Link>
                    </li>
                </ul>

                <div className="w-[200px] h-[80px] flex">
                    <Link
                        href={"/"}
                        className="w-[200px] h-[80px] bg-blue-500 text-white font-semibold text-lg flex items-center justify-center">
                        احجز موعد
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
