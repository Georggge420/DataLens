"use client"

import { ButtonSPrimary, ButtonSSecond, CustomInput } from '@/components/dataForms';
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useEffect, useState } from 'react';


export default function InstagramBoard() {

  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount(visibleCount + 4);
  };

  const loadLess = () => {
    setVisibleCount(visibleCount - 4);
  };
  
  const [palabra, setPalabra] = useState('');
  const [palabrasData, setPalabrasData] = useState(null);

  const [tag, setTag] = useState('');
  const [tagData, setTagData] = useState(null);

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [errorInfo, setErrorInfo] = useState('');
  const [tagError, setTagError] = useState('');

    useEffect(() => {
      if (tagData) {
        setIsDataLoaded(true);
      }
    }, [tagData]);

    const topPalabras = async(event: React.FormEvent<HTMLFormElement>) =>  {
      event.preventDefault();
      setPalabrasData(null);
      setErrorInfo('');
      
      try{
        const response = await fetch(`/api/instagram/keywords/${palabra}`);
        const palabrasData = await response.json();
  
        if (palabrasData.result.hashtags.length === 0) {
          setErrorInfo('Palabra no encontrada');
          return;
        }
  
        setPalabrasData(palabrasData);
      } catch(err){
        setErrorInfo('Ocurrio un error al buscar la palabra clave, por favor intente nuevamente');
        return;
      }
    }

  const topHashtags = async(event: React.FormEvent<HTMLFormElement>) =>  {
    event.preventDefault();
    setTagData(null);
    setTagError('');
    
    try{
    const response = await fetch(`/api/instagram/hashtags/${tag}`);

    if (!response.ok) {
      setTagError('No hubo resultados al buscar el hashtag, por favor intente nuevamente');
    }

    const tagData = await response.json();

    setTagData(tagData);
    } catch(err){
      setTagError('Ocurrio un error al buscar el hashtag, por favor intente nuevamente');
    }
  }

  return (
    <div className='p-2'>
        <div className="p-5 text-left text-grisOscuro text-2xl font-bold font-bungee dark:text-blanco">
          Instagram
        </div>

        <div className="lg:p-7 xs:p-4 text-left text-grisOscuro text-2xl font-bold dark:text-blanco">
          Palabras Clave
        </div>


        <div className='lg:p-7 xs:p-4 grid gap-4 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-4 xs:grid-cols-2'>

          <div className='flex items-center justify-center lg:col-span-4 xs:col-span-1'>
            <p className="text-justify font-semibold font-exo xl:text-base/loose sm:text-base sm:tracking-wide sm:leading-normal xs:text-xs">
                  Este apartado te dejara buscar las ver el contenido mas populares en Instagram relacionado con palabras clave . Solo ingresa la palabra clave y presiona buscar.
            </p>
          </div>
          
          <div className='lg:col-span-4 xs:col-span-1 relative flex items-baseline justify-center'>
            <form onSubmit={topPalabras} className="p-5 grid gap-4 w-full lg:grid-cols-8 lg:grid-rows-1 xs:grid-cols-1 xs:grid-rows-2">
                        <CustomInput
                            type="text" 
                            value={palabra}
                            setValue={setPalabra}
                            placeholder='Palabra Clave'
                            className='text-center p-2 w-full bg-grisClaro rounded-lg text-negroOscuro text-base font-bold lg:col-span-5 xs:col-span-1 xs:row-span-1'
                        />
                        <ButtonSPrimary type='submit' text='Buscar' className='bg-grisClaro col-span-12 lg:col-span-3 xs:col-span-1 xs:row-span-1'/>
              </form>
            </div>

            <div className='lg:col-span-4 xs:col-span-2'>

              <div className={`lg:col-span-2 lg:col-start-2 transition-all duration-500 ease-in-out transform-gpu ${errorInfo ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} flex items-center justify-center`}>
                {errorInfo && <p className='p-3 bg-grisClaro rounded-3xl text-center text-3xl flex items-center justify-center font-exo dark:text-blanco dark:bg-negro40'>
                  <Icon icon="system-uicons:face-sad"  color='white' width={32} height={32}/>
                  {errorInfo}
                </p>
                }
              </div>

            <div className={`grid gap-1 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 transition-all duration-500 ease-in-out transform-gpu ${palabrasData ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              {palabrasData && palabrasData.result.hashtags.slice(0, visibleCount).map((hashtagData, index) => (
                <div className='p-1 bg-blancoOpaco col-span-1 border-solid border-2 border-negroOscuro rounded-lg dark:text-blanco dark:bg-negro40'>
                  <h2 className='text-center font-bold font-exo'>{hashtagData.hashtag.name}</h2>
                  <p className=' font-bold font-exo'>{hashtagData.hashtag.search_result_subtitle}</p>
                  </div>
                ))}
            </div>

              </div>

          <div className='lg:col-span-4 xs:col-span-2 grid gap-5 grid-cols-2'>
            {palabrasData && palabrasData.result.hashtags.length > visibleCount && (
              <ButtonSPrimary text='Cargar más' onClick={loadMore} className='p-3'/>
            )}
            {visibleCount > 5 && <ButtonSSecond text='Cargar menos' onClick={loadLess} className='p-3 col-start-2'/>}
          </div>
      </div>

      <div className="lg:p-7 xs:p-4 text-left text-grisOscuro text-2xl font-bold dark:text-blanco">
          Buscador de hashtags
      </div>

        <div className="lg:p-7 grid gap-4 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-4 xs:grid-cols-2">

            <div className='flex items-center justify-center lg:col-span-4 xs:col-span-2'>
              <p className="text-justify font-semibold font-exo xl:text-base/loose sm:text-base sm:tracking-wide sm:leading-normal xs:text-xs">
                    Con esta herramienta sabras la informacion mas relevante de un hashtag en Instagram. Solo ingresa el hashtag y presiona buscar.
              </p>
            </div>

            <div className='lg:col-span-3 xs:col-span-1 relative flex items-baseline justify-center'>
            <form onSubmit={topHashtags} className="p-5 grid gap-4 w-full lg:grid-cols-8 lg:grid-rows-1 xs:grid-cols-1 xs:grid-rows-2">
                        <CustomInput
                            type="text" 
                            value={tag}
                            setValue={setTag}
                            placeholder='hastag'
                            className='text-center p-2 w-full bg-grisClaro rounded-lg text-negroOscuro text-base font-bold lg:col-span-5 xs:col-span-1 xs:row-span-1'
                        />
                        <ButtonSPrimary type='submit' text='Buscar' className='bg-grisClaro col-span-12 lg:col-span-3 xs:col-span-1 xs:row-span-1'/>
              </form>
            </div>
            
            <div className='lg:col-span-1 xs:col-span-1 h-full w-full flex items-center justify-center'>

              <div className={`transition-all duration-500 ease-in-out transform-gpu ${tagError ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {tagError && (
                  <div className={`bg-blancoOpaco rounded-lg p-5 w-full border-solid border-2 border-negroOscuro font-exo`}>
                    <p className='text-center font-bold'>{tagError}</p>
                  </div>
                )}
              </div>

              <div className={`transition-all duration-500 ease-in-out transform-gpu ${isDataLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              {tagData && (
                <div>
                  <div className='bg-blancoOpaco rounded-lg p-5 w-full border-solid border-2 border-negroOscuro dark:text-white dark:bg-negro40'>
                    <h2 className='px-2 text-center font-bold font-exo'>#{tagData.simplifiedResult.name}</h2>
                    <p className='my-1 font-bold font-exo text-center'>{tagData.simplifiedResult.formatted_media_count} de Posts</p>
                  </div>
                </div>
              )}
              </div>
            </div>

        </div>


    </div>
  )
}
