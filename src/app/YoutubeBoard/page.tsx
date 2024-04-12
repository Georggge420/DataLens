"use client"

import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import 'moment/locale/es';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import { ButtonSPrimary } from '@/components/buttons';



export default function Xboard() {

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

            <form onSubmit={handleSubmit}>
                <input
                    type="text" 
                    value={word}
                    onChange={(e) => setword(e.target.value)}
                    placeholder='Palabra Clave'
                    className=''
                />
                <ButtonSPrimary type='submit' text='Buscar'/>
            </form>
            
            {wordData && wordData.tags && (
                <div>
                    <h2>Resultados para: {wordData.search_term}</h2>
                    <h3>Tags:</h3>
                    <ul>
                    {wordData.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                    </ul>
                </div>
                )}
            
        </div>
  )
}
