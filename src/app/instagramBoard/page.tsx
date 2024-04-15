"use client"

import { ButtonSPrimary, ButtonSSecond } from '@/components/buttons';
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

    useEffect(() => {
      if (tagData) {
        setIsDataLoaded(true);
      }
    }, [tagData]);

  const topPalabras = async(event: React.FormEvent<HTMLFormElement>) =>  {
    event.preventDefault();
    
    const response = await fetch(`/api/instagram/keywords/${palabra}`);
    const palabrasData = await response.json();

    setPalabrasData(palabrasData);
  }

  const topHashtags = async(event: React.FormEvent<HTMLFormElement>) =>  {
    event.preventDefault();
    
    const response = await fetch(`/api/instagram/hashtags/${tag}`);
    const tagData = await response.json();

    setTagData(tagData);
  }

  return (
    <div className='p-2'>
        <div className="p-5 text-left text-grisOscuro text-2xl font-bold font-bungee">
          Instagram
        </div>

        <div className="lg:p-7 xs:p-4 text-left text-grisOscuro text-2xl font-bold">
          Palabras Clave
        </div>


        <div className='lg:p-7 xs:p-4 grid gap-4 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-4 xs:grid-cols-2'>

          <div className='flex items-center justify-center lg:col-span-4 xs:col-span-1'>
            <p className="text-justify font-semibold font-exo xl:text-base/loose sm:text-base sm:tracking-wide sm:leading-normal xs:text-xs ">
                  Este apartado te dejara buscar las ver el contenido mas populares en Instagram relacionado con palabras clave . Solo ingresa la palabra clave y presiona buscar.
            </p>
          </div>
          
          <div className='lg:col-span-4 xs:col-span-1 relative flex items-baseline justify-center'>
            <form onSubmit={topPalabras} className="p-5 grid gap-4 w-full lg:grid-cols-8 lg:grid-rows-1 xs:grid-cols-1 xs:grid-rows-2">
                        <input
                            type="text" 
                            value={palabra}
                            onChange={(e) => setPalabra(e.target.value)}
                            placeholder='Palabra Clave'
                            className='text-center p-2 w-full bg-grisClaro rounded-lg text-negroOscuro text-base font-bold lg:col-span-5 xs:col-span-1 xs:row-span-1'
                        />
                        <ButtonSPrimary type='submit' text='Buscar' className='bg-grisClaro col-span-12 lg:col-span-3 xs:col-span-1 xs:row-span-1'/>
              </form>
            </div>

            <div className='lg:col-span-4 xs:col-span-2 grid gap-1 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2'>
              {palabrasData && palabrasData.result.hashtags.slice(0, visibleCount).map((hashtagData, index) => (
                <div className='p-1 bg-blancoOpaco col-span-1 border-solid border-2 border-negroOscuro rounded-lg'>
                  <h2 className='text-center font-bold'>{hashtagData.hashtag.name}</h2>
                  <p className=' font-bold'>{hashtagData.hashtag.search_result_subtitle}</p>
                  </div>
                ))}
              </div>

          <div className='lg:col-span-4 xs:col-span-2 grid gap-5 grid-cols-2'>
            {palabrasData && palabrasData.result.hashtags.length > visibleCount && (
              <ButtonSPrimary text='Cargar más' onClick={loadMore} className='p-3'/>
            )}
            {visibleCount > 5 && <ButtonSSecond text='Cargar menos' onClick={loadLess} className='p-3 col-start-2'/>}
          </div>
      </div>

      <div className="lg:p-7 xs:p-4 text-left text-grisOscuro text-2xl font-bold">
          Buscador de hashtags
      </div>

        <div className="lg:p-7 grid gap-4 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-4 xs:grid-cols-2">

            <div className='flex items-center justify-center lg:col-span-4 xs:col-span-2'>
              <p className="text-justify font-semibold font-exo xl:text-base/loose sm:text-base sm:tracking-wide sm:leading-normal xs:text-xs ">
                    Con esta herramienta sabras la informacion mas relevante de un hashtag en Instagram. Solo ingresa el hashtag y presiona buscar.
              </p>
            </div>

            <div className='lg:col-span-3 xs:col-span-1 relative flex items-baseline justify-center'>
            <form onSubmit={topHashtags} className="p-5 grid gap-4 w-full lg:grid-cols-8 lg:grid-rows-1 xs:grid-cols-1 xs:grid-rows-2">
                        <input
                            type="text" 
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                            placeholder='hastag'
                            className='text-center p-2 w-full bg-grisClaro rounded-lg text-negroOscuro text-base font-bold lg:col-span-5 xs:col-span-1 xs:row-span-1'
                        />
                        <ButtonSPrimary type='submit' text='Buscar' className='bg-grisClaro col-span-12 lg:col-span-3 xs:col-span-1 xs:row-span-1'/>
              </form>
            </div>

            {tagData && (
              <div className={`lg:col-span-1 xs:col-span-1 h-full w-full flex items-center transition-all duration-500 ease-in-out transform-gpu ${isDataLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className='bg-blancoOpaco rounded-lg p-5 w-full border-solid border-2 border-negroOscuro'>
                  <h2 className='px-2 text-center font-bold'>#{tagData.simplifiedResult.name}</h2>
                  <p className='my-1 font-bold text-center'>{tagData.simplifiedResult.formatted_media_count} de Posts</p>
                  <p className='text-center font-bold'></p>
                </div>
              </div>
            )}
        </div>


    </div>
  )
}
