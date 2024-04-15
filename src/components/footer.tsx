"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Footer = () => {

    const footerNavs = [
        {
            href: '/support',
            name: 'Soporte'
        },
        {
            href: '/tech',
            name: 'Tecnologias'
        },
        {
            href: '/team',
            name: 'Equipo'
        },
    ]

    return (
        <footer className="text-blancoClaro bg-grisOscuro px-4 py-5 mx-full md:px-8 dark:bg-negro40 dark:text-blanco">
            <div className="max-w-lg sm:mx-auto sm:text-center flex items-center justify-center">
                <Image src="/logo.svg" alt="logo" width={28} height={28} />
                <p className='text-bold ms-3 font-bungee'>DataLens</p>
            </div>

            <ul className="items-center justify-center mt-3 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    footerNavs.map((item, idx) => (
                        <li className=" hover:text-grisBajoMedio dark:hover:text-purpura">
                            <Link key={idx} href={item.href}>
                                { item.name }
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <div className="mt-3 items-center justify-center sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; Cafeine Codders 2024.
                </div>
            </div>
        </footer>
    )
}

export default Footer;
