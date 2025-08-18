"use client"

import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/ui/Button';
import { nabidkaData } from '../data/data';
import Image from 'next/image';

function page() {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

            <div className='flex flex-wrap justify-between gap-5'>
                {nabidkaData.map((item) => {
                    const { id, title, name, content, img, seznam } = item;
                    return (
                        <div key={id}>
                            <div  onClick={() => setIsOpen(true)} className='flex flex-col gap-5 bg-amber-50 rounded-2xl p-5 text-black'>
                            <h3>{title}</h3>
                             <Image src={img} alt={name} width={350} height={350} />
                            <Button>Detail</Button>
                            </div>


                            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                                <Button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
                                    aria-label="Zavřít okno"
                                >
                                    &times;</Button>
                                    
                            <h3>{title}</h3>
                            <Image src={img} alt={name} width={350} height={350} />
                            <p>{content}</p>
                            <ul>
                            {seznam.map((seznamItem) => {
                                const {id, name, content} = seznamItem;
                                return (
                                    <li key={id}>{name}</li>
                                );
                            })}
                            </ul>
                            </Modal>
                        </div>
                    );
                })}
            </div>


        </div>
    )
}

export default page