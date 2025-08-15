"use client"
// import React from 'react'
import Image from 'next/image'
import logo from '../../../public/next.svg'
import ModalCookieBar from './ModalCookieBar'
import Menu from './ui/Menu'

function Header() {
    return (
        <div id='header' className="sticky top-0 w-full bg-gray-300 z-50 flex justify-between">
            <ModalCookieBar />
            <div className='m-5'>
                <Image src={logo} alt='logo' />
            </div>

            <div className='flex gap-5 justify-end m-5'>
                <Menu />
            </div>
        </div>
    )
}

export default Header