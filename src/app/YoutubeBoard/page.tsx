"use client"

import React from 'react'
import { useState } from 'react';
import 'moment/locale/es';
import { Icon } from '@iconify/react';
import { ButtonSPrimary, CustomInput } from '@/components/dataForms';
import Link from 'next/link';

export default function Youtubeboard() {

    const [word, setword] = useState('');
    const [wordData, setWordData] = useState(null);
    const [errorInfo, setErrorInfo] = useState('');

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setWordData(null);
        setErrorInfo('');

        try{
            const response = await fetch(`/api/youtube/tags/${word}`);
            const data = await response.json();

            if (data.tags.length === 0) {   
                setErrorInfo('Palabra no encontrada');
                return;
            }

            setWordData(data);
        } catch(err){
            setErrorInfo('Ocurrio un error al buscar la palabra clave, por favor intente nuevamente');
            return;
        }
    }
    


  return (
        <div className='p-2'>
            
            <div className="p-5 text-left text-grisOscuro text-2xl font-bold font-bungee dark:text-blanco">
                YOUTUBE
            </div>

            <div className="p-7 text-left text-grisOscuro text-2xl font-bold dark:text-blanco">
                BUSCADOR DE ETIQUETAS
            </div>
            
            <div className='p-7 grid gap-4 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-4'>

                <p className="text-justify font-semibold font-exo xl:text-base/loose sm:text-base sm:tracking-wide sm:leading-normal xs:text-xs lg:col-span-4">
                    Con esta herramienta podrás buscar las etiquetas más populares al buscar un video en youtube. Solo ingresa la palabra clave y presiona buscar.
                </p>

            <div className='lg:col-span-2 relative flex items-baseline justify-center'>
                <form onSubmit={handleSubmit} className="p-5 grid gap-4 lg:grid-cols-8 lg:grid-rows-1 xs:grid-cols-1 xs:grid-rows-2">
                    <CustomInput
                        type="text"
                        value={word}
                        setValue={setword}
                        placeholder='Palabra Clave'
                        className='lg:col-span-5 xs:col-span-1 xs:row-span-1'
                    />
                    <ButtonSPrimary type='submit' text='Buscar' className=' col-span-12 lg:col-span-3 xs:col-span-1 xs:row-span-1'/>
                </form>
            </div>

                <div className='lg:col-span-2 w-full'>

                    {errorInfo && (
                        <div className='p-3 rounded-lg bg-grisClaro dark:bg-negro40 dark:text-blanco text-negroOscuro text-3xl flex items-center justify-center dark:border-solid dark:border-2 dark:border-Negro1A'>
                            <Icon icon="system-uicons:face-sad"  color='white' width={32} height={32}/>
                            {errorInfo}
                            </div>
                    )}

                    <div className={`transition-all duration-500 ease-in-out transform-gpu ${wordData? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        {wordData && wordData.tags && (
                            <div className='p-3 rounded-lg grid gap-2 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-2'>
                                <h2 className='p-3 text-center bg-grisClaro dark:bg-negro40 dark:text-blanco text-negroOscuro font-bold rounded-lg lg:col-span-2 dark:border-solid dark:border-2 dark:border-Negro1A'>Resultados para: {wordData.search_term}</h2>
                                <ul className='p-3 text-center bg-grisClaro dark:bg-negro40 dark:text-blanco text-negroOscuro font-bold rounded-lg lg:col-span-2 grid gap-3 xs:lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-2 dark:border-solid dark:border-2 dark:border-Negro1A'>
                                {wordData.tags.map((tag, index) => (
                                <Link href={`https://www.youtube.com/results?search_query=${encodeURIComponent(tag)}`}>
                                    <li key={index} className={'p-1 lg:col-span-1 rounded-md hover:bg-grisOscuro hover:text-white dark:hover:bg-purpura'}>
                                                {tag}
                                        </li>
                                    </Link>
                                ))}
                                </ul>
                            </div>
                            )}
                    </div>
                </div>

            </div>
            
        </div>
  )
}
