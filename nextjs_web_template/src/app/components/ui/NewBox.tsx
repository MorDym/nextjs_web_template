import { NewBoxProps } from '@/app/data/type'
import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

function NewBox({ id, title, content, img, url, children, caption, seznam }: NewBoxProps) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            {img && (
                <Image src={img} alt={title} width={150} height={150} />
            )}
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
            {url && (

                <Link href={url} children={caption ? caption : "výchozí pospisek"} >

                </Link>
            )}
            {children}
        </div>
    )
}

export default NewBox