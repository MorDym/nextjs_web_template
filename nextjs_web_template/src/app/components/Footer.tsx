'use client'

import React, { useEffect, useState } from 'react'
import { footerMenuLinksData } from '../data/data';
import Link from 'next/link';
import ModalCookieBar from './ModalCookieBar';
import Button from './ui/Button';

function Footer() {

  const [cookieOpen, setCookieOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
                setCookieOpen(false);
            }, 100);
    
    if(cookieOpen){}
            return () => clearInterval(interval);
  }, [cookieOpen])

  let date: Date = new Date();
  let currentYear = date.getFullYear();

  return (
    <div className='flex flex-col gap-5 items-center justify-center w-screen bg-gray-300 p-5'>
      
      <ModalCookieBar isOpen={cookieOpen} />
      <div className='flex gap-5'>
      {footerMenuLinksData.map((link) => {
        const { id, name, href } = link;
        return (
          <Link key={id} children={name} href={href} className='hover:bg-purple-300' />
        );
      }
      )}
      <Button onClick={() => setCookieOpen(true)}>Spravovat souhlas cookie</Button>
      </div>
      <p>MoDy´s template, {currentYear} &copy;</p>
    </div>
  )
}

export default Footer