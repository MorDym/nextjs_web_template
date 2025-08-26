import React from 'react'
import Button from './ui/Button'
import Link from 'next/link'

function Hero() {
  return (
<section id="top" className="relative w-full h-screen text-amber-50">
  {/* Obrázek pozadí */}
  <div className="absolute inset-0 bg-custom bg-cover bg-center"></div>

  {/* Tmavý overlay */}
  <div className="absolute inset-0 bg-black/65"></div>

  {/* Obsah */}
  <div className="relative z-10 p-5 m-5">
    <h2 className="text-3xl font-bold">Vítejte u nás!</h2>
    <p className="mt-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut alias quibusdam molestiae non temporibus cupiditate magni dolorem et. Temporibus ad, deserunt voluptate atque doloribus expedita explicabo eius quidem aperiam eveniet!
    </p>
    <Link children='Kontakt' href='/kontakt'></Link>
  </div>
</section>
    
  )
}

export default Hero