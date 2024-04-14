"use client"

import { ButtonSPrimary } from '@/components/buttons';
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
    
        const response = await fetch(`/api/xTwitter/users/${username}`);
        const data = await response.json();
    
        if (data.error) {
            setUserNotFound(true);
            setUserData(null);
        } else {
            setUserNotFound(false);
            setUserData(data);
        }
      };

  return (
        <div className='p-2'>
            
            <div className="p-5 text-left text-grisOscuro text-2xl font-bold">
                X
            </div>

            <div className="p-5 text-left text-grisOscuro text-2xl font-bold lg:col-span-12 sm:col-span-2 xs:col-span-1">
                    Buscador de usuario
            </div>

            <p className="px-7 text-justify font-semibold italic xl:text-base/loose sm:text-base sm:tracking-wide sm:leading-normal xs:text-xs lg:col-span-12 sm:col-span-2 xs:col-span-1">
                Consulta la informacion del usuario de X que desees.
            </p>
            
            <div className='m-5 p-5 rounded-2xl grid gap-4 md:grid-auto-cols:minmax(0, auto); xs:grid-auto-rows:minmax(0, auto); lg:grid-cols-12 xs:grid-cols-1'>
            
                <div className='flex items-center justify-center h-full xs:row-start-1 lg:col-span-6 sm:row-span-1 xs:row-span-1'>
                    <form onSubmit={handleSubmit} className='p-5 grid grid-cols-12 gap-6  rounded-xl lg:grid-cols-12 md:grid-cols-6 xs:grid-cols-2 xl:max-h-[104px] xs:max-h-[145px]'>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="usuario"
                            className='text-center p-2 w-full bg-grisClaro rounded-lg text-negroOscuro text-base font-bold col-span-12 lg:col-span-8 md:col-span-6 xs:col-span-2'
                        />
                        <ButtonSPrimary type='submit' text='Buscar Usuario' className='bg-grisClaro col-span-12 lg:col-span-4 md:col-span-6 xs:col-span-2'/>
                    </form>
                </div>

                {userNotFound ? (
                        <div className=' w-full h-full rounded-2xl p-5 lg:col-span-6 xs:col-span-1 sm:row-span-2 xs:row-span-1 border-solid border-2 border-blancoClaro'>
                            <p>Usuario no encontrado</p>
                            <Image src="/path/to/your/image.jpg" alt="User not found" width={50} height={50} />
                        </div>
                ) :userData && (
                    <div className='bg-blancoOpaco w-full h-full rounded-2xl p-5 lg:col-span-6 xs:col-span-1 sm:row-span-2 xs:row-span-1 border-solid border-2 border-blancoClaro'>
                        <div className='bg-grisClaro rounded-xl p-5 grid grid-auto-rows:minmax(0, auto); grid-cols-3 gap-1'>
                                <div className='rounded-2xl overflow-hidden row-span-2 col-span-1'>
                                    <Image 
                                        src={userData.profile_image_url_https} 
                                        alt="Imagen de perfil" 
                                        width={50} 
                                        height={50}
                                        quality={100}
                                        layout='responsive'
                                    />
                                </div>

                                <p className='p-1 text-negroOscuro font-bold rounded-xl row-span-1 col-span-2 flex items-center'>
                                    <Icon 
                                        icon={userData.is_blue_verified ? "fa:check-circle" : "fa:exclamation-circle"} 
                                        className={clsx('ml-1 mr-1', {'text-verde': userData.is_blue_verified, 'text-rojo': !userData.is_blue_verified})}
                                        height="2em"
                                        color={userData.is_blue_verified ? "blue" : "red"}
                                    />
                                    {userData.is_blue_verified ? 'Verificado' : 'No verificado'}
                                </p>

                            <p className='p-1 text-negroOscuro font-bold rounded-xl row-span-1 col-span-2 flex items-center'>
                                <Icon icon="ion:calendar" className='' height="2em" color="black"/> {moment(userData.created_at, 'MMM Do YY').locale('es').format('LL')}
                            </p>

                            <p className='p-1 text-negroOscuro font-bold rounded-xl row-span-1 col-span-1 flex items-center'>
                                <Icon icon="material-symbols:star" className='' height="2em" color="black"/> {userData.favourites_count}
                            </p>

                            <p className='p-1 text-negroOscuro font-bold rounded-xl row-span-1 col-span-1 flex items-center'>
                            <Icon icon="mingcute:user-follow-fill" height="2em" color="black" /> {userData.followers_count}
                            </p>

                            <p className='p-1 text-negroOscuro font-bold rounded-xl row-span-1 col-span-1 flex items-center'>
                                <Icon icon="iconoir:post-solid" height="2em" color="black" /> {userData.media_count}
                            </p>

                            <p className='p-1 text-negroOscuro font-bold rounded-xl row-span-1 col-span-3 flex items-center'>
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
  )
}
