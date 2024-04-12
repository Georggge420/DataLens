"use client"

import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import 'moment/locale/es';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import { ButtonSPrimary } from '@/components/buttons';



export default function Youtubeboard() {

    const [word, setword] = useState('');
    const [wordData, setWordData] = useState(null);

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await fetch(`/api/youtube/tags/${word}`);
        const data = await response.json();

        setWordData(data);
    }
    


  return (
        <div className='p-2'>
            
            <div className="p-5 text-left text-grisOscuro text-2xl font-bold">
                YOUTUBE
            </div>

            <div className="p-7 text-left text-grisOscuro text-2xl font-bold">
                TAG SEARCHER
            </div>
            
            <div className='p-7 grid gap-4 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-4'>

                <p className="text-justify font-semibold italic xl:text-base/loose sm:text-base sm:tracking-wide sm:leading-normal xs:text-xs lg:col-span-4">
                    Con esta herramienta podrás buscar las etiquetas más populares al buscar un video en youtube. Solo ingresa la palabra clave y presiona buscar.
                </p>

            <div className='lg:col-span-2 relative flex items-baseline justify-center'>
                <form onSubmit={handleSubmit} className="p-5 grid gap-4 lg:grid-cols-8 lg:grid-rows-1 xs:grid-cols-1 xs:grid-rows-2">
                    <input
                        type="text" 
                        value={word}
                        onChange={(e) => setword(e.target.value)}
                        placeholder='Palabra Clave'
                        className='text-center p-2 w-full bg-grisClaro rounded-lg text-negroOscuro text-base font-bold lg:col-span-5 xs:col-span-1 xs:row-span-1'
                    />
                    <ButtonSPrimary type='submit' text='Buscar' className='bg-grisClaro col-span-12 lg:col-span-3 xs:col-span-1 xs:row-span-1'/>
                </form>
            </div>

            {wordData && wordData.tags && (
                <div className='p-3 rounded-lg grid gap-2 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-2 lg:col-span-2 w-full'>
                    <h2 className='p-3 text-center bg-grisClaro text-negroOscuro font-bold rounded-lg lg:col-span-2'>Resultados para: {wordData.search_term}</h2>
                    <ul className='p-3 text-center bg-grisClaro text-negroOscuro font-bold rounded-lg lg:col-span-2 grid gap-3 xs:lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-2'>
                    {wordData.tags.map((tag, index) => (
                        <li key={index} className='p-1 lg:col-span-1 border-solid border-2 border-negroOscuro rounded-md'>{tag}</li>
                    ))}
                    </ul>
                </div>
                )}

            </div>
            
        </div>
  )
}
