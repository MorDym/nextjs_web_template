import React from 'react'
import { basicContentData } from '../data/data'
import Image from 'next/image';

function BasicContent() {
    return (
        <div className='flex flex-col gap-5'>
            {basicContentData.map((contents) => {
                const { id, title, content, img, seznam } = contents;
                return (
                    <div key={id} className="flex flex-col sm:flex-row gap-5">
                        <Image src={img} alt={title} width={350} height={350} />
                        <div>
                            <h2>{title}</h2>
                            <p>{content}</p>
                            <ul>
                                {seznam.map((item) => {
                                    const { id, name, content } = item;
                                    return (
                                        <li key={id}>{name} <br />{content}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default BasicContent