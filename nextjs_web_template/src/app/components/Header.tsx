"use client"
// import React from 'react'
import Image from 'next/image'
import logo from '../../../public/next.svg'
import ModalCookieBar from './ModalCookieBar'
import Menu from './ui/Menu'

function Header() {
    return (
        <div id='header' className="sticky top-0 w-full bg-gray-300 z-50 flex justify-between mb-10">
            <div className='m-5'>
            <ModalCookieBar />
                <Image src={logo} alt='logo' width='85' />
            </div>

            <div className='m-5'>
                <Menu />
            </div>

         {/* div pro upravu zobrazeni menu uprostred na desktopu
           <div className='lg:block  hidden m-5'>
              
            </div>*/}
        </div>
    )
}

export default Header