"use client"

import React from 'react'
import dynamic from 'next/dynamic';

const Icon = dynamic(() => import('@iconify/react').then((mod) => mod.Icon), { ssr: false });

export default function tech() {

    const tecnologias = [
        { name: 'nextjs', Icon: 'tabler:brand-nextjs', text: 'Next.js es un framework de React que permite la renderización del lado del servidor para aplicaciones web reactivas.' },
        { name: 'tailwindcss', Icon: 'mdi:tailwind', text: 'Tailwind CSS es un framework de utilidades CSS que facilita el diseño y desarrollo de interfaces de usuario altamente personalizables.' },
        { name: 'docker', Icon: 'uil:docker', text: 'Docker es una plataforma de software que permite crear, implementar y ejecutar aplicaciones dentro de contenedores virtualizados.' },
        { name: 'git', Icon: 'mdi:git', text: 'Git es un sistema de control de versiones distribuido que permite realizar un seguimiento de los cambios en archivos y coordinar el trabajo en proyectos.' },
        { name: 'mongodb', Icon: 'bxl:mongodb', text: 'MongoDB es una base de datos NoSQL orientada a documentos, que permite el almacenamiento y gestión de datos de forma flexible y escalable.' },
        { name: 'typescript', Icon: 'akar-icons:typescript-fill', text: 'TypeScript es un superconjunto de JavaScript que añade tipado estático y otras características, lo que facilita el desarrollo de aplicaciones más robustas y escalables.' },
        { name: 'vercel', Icon: 'skill-icons:vercel-light', text: 'Vercel es una plataforma de hosting y continuous deployment que simplifica el proceso de despliegue y entrega continua de aplicaciones web.' },
        { name: 'iconify', Icon: 'line-md:iconify1', text: 'Iconify es una biblioteca de iconos de código abierto que permite agregar y utilizar fácilmente iconos vectoriales en tus aplicaciones web.' },
      ]

  return (
    <div>
        <div className="p-5 text-left text-grisOscuro text-2xl font-bold font-bungee dark:text-blanco">
        Tecnologias
      </div>

      <div className="grid gap-6 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-2">
            {tecnologias.map((tecnologia) => (
            <div key={tecnologia.name} className='p-5 lg:col-span-1 bg-grisClaro rounded-xl dark:bg-negro40 dark:text-blanco'>
                <Icon icon={tecnologia.Icon} width={50} height={50} />
                <p className='font-exo'>{tecnologia.text}</p>
            </div>
            ))}
      </div>
    </div>
  )
}
