"use client"

import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/ui/Button';
import { nabidkaData } from '../data/data';
import Image from 'next/image';

function page() {

    const [selectedItem, setSelectedItem] = useState<null | Number>(null);

    const handleSelectItem = (id:number) => {
        setSelectedItem(id);
    }

    const handleCloseModal = () => {
        setSelectedItem(null);
    }

      const nabidka = nabidkaData.find((s) => s.id === selectedItem);

    return (
        <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

            <div className='flex flex-wrap justify-between gap-5'>
                {nabidkaData.map((item) => {
                    const { id, title, name, content, img, seznam } = item;
                    return (
                            <div  key={id} onClick={() => handleSelectItem(id)} className='flex flex-col gap-5 bg-amber-50 scale-95 hover:scale-100 hover:shadow-xl/30 hover:shadow-amber-200 rounded-2xl p-5 text-black'>
                            <h3>{title}</h3>
                             <Image src={img} alt={name} width={350} height={350} />
                            <Button>Detail</Button>
                            </div>)

                })}

                
                {nabidka && (
                            <Modal isOpen={true} onClose={() => handleCloseModal()} className='bg-white m-5 rounded-xl shadow-lg p-6 max-w-4xl w-full relative text-black'>
                                <Button
                                    onClick={() => handleCloseModal()}
                                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
                                    aria-label="Zavřít okno"
                                >
                                    &times;</Button>
                                    
                            <h3>{nabidka.title}</h3>
                            <Image src={nabidka.img} alt={nabidka.name} width={350} height={350} className='w-full' />
                            <p>{nabidka.content}</p>
                            <ul>
                            {nabidka.seznam.map((seznamItem) => {
                                const {id, name, content} = seznamItem;
                                return (
                                    <li key={id}>{name}</li>
                                );
                            })}
                            </ul>
                            <Button onClick={() => handleCloseModal()}
                                    className='cursor-pointer'
                                    aria-label="Zavřít okno">Zavřít</Button>
                            </Modal>

                )}


            </div>


        </div>
    )
}

export default page