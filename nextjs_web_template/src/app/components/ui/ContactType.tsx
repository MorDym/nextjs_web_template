import { ContactTypeProps } from '@/app/data/type'
import React from 'react'

function ContactType({ type, value }: ContactTypeProps) {

    return (
        <div>
            {type === 'email' ? (
               <div className='flex gap-5'><p>Napište nám</p> <a href={`mailto:${value}`}>{value}</a></div>
            ) : type === 'phone' ? (
                <div className='flex gap-5'><p>Zavolejte nám</p><a href={`tel:${value}`}>{value}</a></div>
            ) : (
                <div className='flex gap-5'><p>Adresa</p><p>{value}</p></div>
            )}
        </div>
    )
}

export default ContactType