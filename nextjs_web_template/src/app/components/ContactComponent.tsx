import React from 'react'
import Map from '../components/Map'
import { contactData } from '../data/data';
import ContactType from '../components/ui/ContactType';
import { ContactTypeEnum } from '../data/type';


function ContactComponent() {
    return (
        <div className='flex flex-col sm:flex-row gap-5 items-center md:gap-20'>
            <div className='flex flex-col gap-5 flex-1'>
                <h2>Kontaktujte nás</h2>
                {contactData.map((contact) => {

                    const { id, type, value } = contact;

                    // Převod stringu na enum
                    let enumType: ContactTypeEnum;
                    switch (type) {
                        case 'email':
                            enumType = ContactTypeEnum.EMAIL;
                            break;
                        case 'phone':
                            enumType = ContactTypeEnum.PHONE;
                            break;
                        case 'address': // opravil jsem překlep 'adress'
                            enumType = ContactTypeEnum.ADDRESS;
                            break;
                        default:
                            throw new Error(`Unknown contact type: ${type}`);
                    }
                    return <ContactType key={id} id={id} type={enumType} value={value} />;
                })}
            </div>

            <Map />
        </div>
    )
}

export default ContactComponent