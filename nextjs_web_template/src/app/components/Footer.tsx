import React from 'react'
import { footerMenuLinksData } from '../data/data';
import MenuLink from './MenuLink';

function Footer() {
  return (
            <div className='flex flex-col gap-5 justify-center w-screen bg-gray-300'>
                {footerMenuLinksData.map((link) => {
                    const { id, name, href } = link;
                    return (
                            <MenuLink key={id} id={id} name={name} href={href} className='hover:bg-purple-300' />
                    );
                }
                )}
            </div>
  )
}

export default Footer