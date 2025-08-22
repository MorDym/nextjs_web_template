import React from 'react'
import { footerMenuLinksData } from '../data/data';
import MenuLink from './MenuLink';
import Link from 'next/link';

function Footer() {

  let date: Date = new Date();
  let currentYear = date.getFullYear();

  return (
    <div className='flex flex-col gap-5 items-center justify-center w-screen bg-gray-300 p-5'>
      <div className='flex gap-5'>
      {footerMenuLinksData.map((link) => {
        const { id, name, href } = link;
        return (
          <Link key={id} children={name} href={href} className='hover:bg-purple-300' />
        );
      }
      )}
      </div>
      <p>MoDy´s template, {currentYear} &copy;</p>
    </div>
  )
}

export default Footer