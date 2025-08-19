import React from 'react'
import Image from 'next/image';
import { BasicContentProps } from '../data/type';

function BasicContent({ id, title, content, img, seznam }: BasicContentProps) {

    return (
        <div key={id}>
            {img ? <Image src={img} alt={title} width={350} height={350} /> : null}
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
                {seznam && (
                    <ul>
                        {seznam.map((item) => (
                            <li key={item.id}>
                                {item.name} <br />
                                {item.content}
                            </li>
                        ))}
                    </ul>
                )}

            </div>
        </div>

    );
}

export default BasicContent