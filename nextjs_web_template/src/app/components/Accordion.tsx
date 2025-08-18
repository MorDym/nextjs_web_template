"use client"

import React, { useEffect, useRef, useState } from 'react'
import { AccordionProps } from '../data/type'
import Button from './ui/Button'

function Accordion({ title, content }: AccordionProps) {

    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState("0px");
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight("0px");
        }
    }, [isOpen]);


    return (
        <div className=''>
            <Button onClick={() => setIsOpen(prev => !prev)} className='bg-amber-400 w-full'>{title}</Button>

            <div
                ref={contentRef}
                style={{ maxHeight: height }}
                className="transition-all duration-300 ease-in-out overflow-hidden w-full"
            >
                <div className="p-3">{content}</div>
            </div>
        </div>
    )
}

export default Accordion