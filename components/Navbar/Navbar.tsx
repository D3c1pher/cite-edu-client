"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "@/components";
import { nav_items } from "@/constants";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <nav className="flex justify-between items-center z-10 px-5 bg-gradient-to-r from-[#07486e] to-[#0077ab] drop-shadow-md relative">
            <div className="flex justify-center lg:justify-start items-center w-full">

                {/* Logo for Desktop */}
                <Link href="/">
                    <Image
                        src="/images/cite-logo-text.png"
                        alt="CITE Logo"
                        width={400}
                        height={400}
                        className="hidden lg:flex"
                    />
                </Link>

                {/* Logo for Mobile */}
                <Link href="/" className="flex items-center justify-center lg:hidden p-5 drop-shadow">
                    <Image
                        src="/images/cite-logo.png"
                        alt="CITE Logo"
                        width={100}
                        height={100}
                    />
                </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-10 fixed right-5">
                {nav_items.map((item) => (
                    <li
                        key={item.id}
                        className="font-bold text-2xl text-transparent uppercase bg-white hover:bg-gradient-to-r from-[#FBB400] to-[#FEE101] bg-clip-text drop-shadow no-underline">
                        <Link href={item.href}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger Icon */}
            <button
                onClick={toggleMenu}
                className="lg:hidden flex items-center absolute top-15 right-10 z-20"
                aria-label="Toggle Menu"
            >
                <MenuIcon />
            </button>

            {/* Mobile Menu */}
            <div
                className={`${isMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden absolute top-0 right-0 w-full h-screen bg-gradient-to-r from-[#07486e] to-[#0077ab] flex justify-center items-center transition-transform duration-300 ease-in-out z-10`}>
                <ul className="flex flex-col items-center gap-5">
                    {nav_items.map((item) => (
                        <li
                            key={item.id}
                            className="font-bold text-2xl text-transparent uppercase bg-white hover:bg-gradient-to-r from-[#FBB400] to-[#FEE101] bg-clip-text drop-shadow-sm no-underline">
                            <Link href={item.href}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
