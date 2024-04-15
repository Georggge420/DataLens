"use client"

import React from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const Icon = dynamic(() => import('@iconify/react').then((mod) => mod.Icon), { ssr: false });


export default function tech() {

  return (
    <div>
      <div className="p-5 text-left text-grisOscuro text-2xl font-bold font-bungee dark:text-blanco">
        Soporte
      </div>

      <div className='sm:p-10 xs:p-2 grid gap-4 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1'>
      <div className="bg-grisClaro dark:bg-negro40 p-5 rounded-xl lg:col-span-4 sm:col-span-2 xs:col-span-1">
        <div className="text-negroOscuro mb-5 text-center text-xl font-bold font-bungee flex items-center dark:text-blanco">
          Contactanos
        </div>
        <div className="p-5">
        "¿Necesitas ayuda o tienes alguna pregunta? No dudes en contactarnos a través de nuestro correo electrónico cafeinecodders@gmail.com. Nuestro equipo de soporte estará encantado de asistirte y responder a tus inquietudes. Esperamos recibir tus correos y brindarte la mejor atención posible."
        </div>
      </div>

      <div className='lg:col-span-2 lg:col-start-2 sm:col-span-2 sm:row-span-2 xs:row-span-1 relative lg:h-[350px] sm:h-[200px] xs:h-[150px]'>
      <Image
          src="/illustrations/support-illustrtion-1.svg"
          alt="Proyections"
          layout='fill'
          objectFit='contain'
        />
        </div>
      </div>

    </div>
  )
}
