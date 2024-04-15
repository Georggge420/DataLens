"use client"

import React from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Icon = dynamic(() => import('@iconify/react').then((mod) => mod.Icon), { ssr: false });


export default function tech() {

    const Team = [
        { name: 'Jorge Cervantes', imgPath: '/images/img1.png', text: 'Desarrollo front end. Antes con angular ahora con React', frase:'el querer es poder'},
        { name: 'Kitaro Cortez', imgPath: '/images/img2.jpg', text: 'Aprendiendo react, node, backend y recientemente bases de datos no relacionales', frase:'Un dia sin aprender algo nuevo es un dia desperdiciado'},
        { name: 'Johan Maldonado', imgPath: '/images/img2.png', text: 'Python developer y front end rookie.', frase:'Las mentiras son la verdad de los ignorantes'},
      ]

  return (
    <div>
        <div className="p-5 text-left text-grisOscuro text-2xl font-bold font-bungee dark:text-blanco">
        Team
      </div>

      <div className="grid gap-6 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-3">
            {Team.map((pana) => (
            <div key={pana.name} className='p-5 lg:col-span-1 bg-grisClaro rounded-xl dark:bg-negro40 dark:text-blanco'>
                <div className="p-5 text-left text-grisOscuro text-2xl font-bold font-bungee ">
                    {pana.name}
                </div>

                <Image src={pana.imgPath} width={100} height={100} alt='foto' className='m-5 rounded-3xl'/>
                <p className='p-5 font-bold font-exo'>{pana.text}</p>
                <p className='p-5 font-exo text-right italic'>{pana.frase}</p>
            </div>
            ))}
      </div>
    </div>
  )
}
