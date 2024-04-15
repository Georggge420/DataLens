"use client"

import { ButtonSPrimary, CustomInput } from '@/components/dataForms';
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import 'moment/locale/es';
import moment from 'moment';
import { Icon } from '@iconify/react';
import clsx from 'clsx';


export default function Xboard() {

    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [userNotFound, setUserNotFound] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUserNotFound(false);
        setUserData(null);
        7

        try {
            const response = await fetch(`/api/xTwitter/users/${username}`);
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            const data = await response.json();

            if (data.error) {
                setUserNotFound(true);
                setUserData(null);
            } else {
                setUserNotFound(false);
                setUserData(data);
            }
        } catch (error) {
            console.error(error);
            setUserNotFound(true);
            setUserData(null);
    }
      };

  return (
        <div className='p-2'>
            
            <div className="p-5 text-left text-grisOscuro text-2xl font-bold font-bungee dark:text-blanco">
                X
            </div>

            <div className="p-5 text-left text-grisOscuro text-2xl font-bold lg:col-span-12 sm:col-span-2 xs:col-span-1 dark:text-blanco">
                    Buscador de usuario
            </div>

            <p className="px-7 text-justify font-semibold font-exo xl:text-base/loose sm:text-base sm:tracking-wide sm:leading-normal xs:text-xs lg:col-span-12 sm:col-span-2 xs:col-span-1">
                Consulta la informacion del usuario de X que desees.
            </p>
            
            <div className='m-5 p-5 rounded-2xl grid gap-4 md:grid-auto-cols:minmax(0, auto); xs:grid-auto-rows:minmax(0, auto); lg:grid-cols-12 xs:grid-cols-1'>
            
                <div className='flex items-center justify-center h-full xs:row-start-1 lg:col-span-6 sm:row-span-1 xs:row-span-1'>
                    <form onSubmit={handleSubmit} className='p-5 grid grid-cols-12 gap-6  rounded-xl lg:grid-cols-12 md:grid-cols-6 xs:grid-cols-2 xl:max-h-[104px] xs:max-h-[145px]'>
                        <CustomInput
                            type="text"
                            value={username}
                            setValue={setUsername}
                            placeholder="usuario"
                            className='text-center p-2 w-full bg-grisClaro rounded-lg text-negroOscuro text-base font-bold col-span-12 lg:col-span-8 md:col-span-6 xs:col-span-2'
                        />
                        <ButtonSPrimary type='submit' text='Buscar Usuario' className='bg-grisClaro col-span-12 lg:col-span-4 md:col-span-6 xs:col-span-2'/>
                    </form>
                </div>
                
                <div className='p-5 lg:col-span-6 xs:col-span-1 sm:row-span-2 xs:row-span-1'>

                <div className={`w-full transition-all duration-500 ease-in-out transform-gpu ${userNotFound ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    {userNotFound && (
                        <div className={`bg-blancoOpaco rounded-2xl w-full flex items-center justify-center`}>
                            <Icon icon="system-uicons:face-sad"  color='black' width={32} height={32}/>
                            <p className=' text-negroOscuro text-3xl me-1'>Usuario no encontrado</p>
                        </div>
                    )}
                </div>

                <div className={`w-full transition-all duration-500 ease-in-out transform-gpu ${userData ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {userData && (
                    <div className='bg-blancoOpaco rounded-2xl  w-full h-full dark:bg-negro40 dark:border-solid dark:border-2 dark:border-Negro1A'>
                        <div className='rounded-xl p-5 grid grid-auto-rows:minmax(0, auto); grid-cols-3 gap-1'>
                                <div className='rounded-2xl overflow-hidden row-span-2 col-span-1 flex items-center'>
                                    <Image 
                                        src={userData.profile_image_url_https} 
                                        alt="Imagen de perfil" 
                                        width={50} 
                                        height={50}
                                        quality={100}
                                        layout='responsive'
                                    />
                                </div>

                                <p className='p-1 text-negroOscuro dark:text-blanco font-bold rounded-xl row-span-1 col-span-2 flex items-center'>
                                    <Icon 
                                        icon={userData.is_blue_verified ? "fa:check-circle" : "fa:exclamation-circle"} 
                                        className={clsx('mx-1', {'text-verde': userData.is_blue_verified, 'text-rojo': !userData.is_blue_verified})}
                                        height="2em"
                                        color={userData.is_blue_verified ? "blue" : "red"}
                                    />
                                    {userData.is_blue_verified ? 'Verificado' : 'No verificado'}
                                </p>

                            <p className='p-1 text-negroOscuro dark:text-blanco font-bold rounded-xl row-span-1 col-span-2 flex items-center font-exo'>
                                <Icon icon="ion:calendar" className='text-black dark:text-white' height="2em"/> {moment(userData.created_at, 'MMM Do YY').locale('es').format('LL')}
                            </p>

                            <p className='p-1 text-negroOscuro dark:text-blanco font-bold rounded-xl row-span-1 col-span-1 flex items-center font-exo'>
                                <Icon icon="material-symbols:star" className='text-black dark:text-white' height="2em"/> {userData.favourites_count}
                            </p>

                            <p className='p-1 text-negroOscuro dark:text-blanco font-bold rounded-xl row-span-1 col-span-1 flex items-center font-exo'>
                            <Icon icon="mingcute:user-follow-fill" className='text-black dark:text-white' height="2em" /> {userData.followers_count}
                            </p>

                            <p className='p-1 text-negroOscuro dark:text-blanco font-bold rounded-xl row-span-1 col-span-1 flex items-center font-exo'>
                                <Icon icon="iconoir:post-solid" className='text-black dark:text-white' height="2em" /> {userData.media_count}
                            </p>

                            <p className='p-1 text-negroOscuro dark:text-blanco font-bold rounded-xl row-span-1 col-span-3 flex items-center font-exo'>
                                {userData.possibly_sensitive ? 
                                    <Icon icon="emojione-monotone:no-one-under-eighteen" height="2em" color="red" /> :
                                    <Icon icon="line-md:sunny-filled-loop" height="2em" color="yellow" />
                                }
                                {userData.possibly_sensitive ? 'Contentido sensible' : 'Contentido no sensible'}
                            </p>
                        </div>
                </div>    
                )}
                </div>
                </div>
            </div>
        </div>
  )
}
