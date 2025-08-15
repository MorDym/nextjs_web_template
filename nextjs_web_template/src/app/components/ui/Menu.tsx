"use client"

// import React from 'react'
import { useState } from "react"
// import Button from "./Button";
import { menuLinksData } from "../../data/data";
import MenuLink from "../MenuLink";

function Menu() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <nav>
            <section id="mobile-menu" className="lg:hidden">
                <div onClick={() => setIsNavOpen((prev) => !prev)} className={`${isNavOpen ? 'opacity-0 hidden' : 'opacity-100'}  space-y-2 transition-opacity duration-300`}>
                    <span className="block h-0.5 w-8  bg-black"></span>
                    <span className="block h-0.5 w-8  bg-black"></span>
                    <span className="block h-0.5 w-8  bg-black"></span>
                </div>
                <div className={`
      absolute top-full right-0 w-48 bg-white shadow-lg rounded-md
      transition-opacity duration-300
      ${isNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
    `}>
                    <div onClick={() => setIsNavOpen(false)} className="right-0">
                        <svg
                            className="h-8 w-8 text-black"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    {menuLinksData.map((link) => {
                        const { id, name, href } = link;
                        return (
                            <MenuLink key={id} name={name} href={href} className='bg-purple-500 p-1 text-white' />
                        );
                    })}
                </div>
            </section>
            <section id="desctop-menu" className="hidden lg:flex gap-5">
                {menuLinksData.map((link) => {
                    const { id, name, href } = link;
                    return (
                        <MenuLink key={id} name={name} href={href} className='bg-purple-500 p-1 text-white' />
                    );
                })}
            </section>
        </nav>
    )
}

export default Menu