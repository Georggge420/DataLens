"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Footer = () => {

    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Soporte'
        },
        {
            href: 'javascript:void()',
            name: 'Tecnologias'
        },
        {
            href: 'javascript:void()',
            name: 'Equipo'
        },
    ]

    return (
        <footer className="text-negroOscuro bg-blancoOpaco px-4 py-5 mx-full md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center flex items-center justify-center">
                <Image src="/logo.svg" alt="logo" width={28} height={28} />
                <p className='text-bold ms-3'>DataLens</p>
            </div>

            <ul className="items-center justify-center mt-3 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    footerNavs.map((item, idx) => (
                        <li className=" hover:text-grisBajoMedio">
                            <Link key={idx} href={item.href}>
                                { item.name }
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <div className="mt-3 items-center justify-center sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2024 Cafeine Codders reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer;
