"use client"

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { useRef, useState } from 'react';
import Link from 'next/link';
import {ButtonSPrimary} from "@/components/dataForms";
import Slider from "react-slick";

export default function Home() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const [mark, setMark] = useState('');
    const [markData, setMarkData] = useState(null);
    const inputRef = useRef(null);
    const [errorInfo, setErrorInfo] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMarkData(null);
    errorInfo && setErrorInfo('');

    const mark = inputRef.current.value;
    
    if (!mark) {
      setErrorInfo('Por favor ingrese una marca');
      return;
    }

    try{
      const response = await fetch(`api/contacts/${mark}`);
      const data = await response.json();

      const {linkedin, twitter, facebook, youtube, instagram, github, snapchat, tiktok} = data.result;

      if (!linkedin && !twitter && !facebook && !youtube && !instagram && !github && !snapchat && !tiktok) {
        setErrorInfo('No se encontraron datos de redes sociales para la palabra ingresada');
        return;
      }

      setMarkData(data);
    }
    catch(err){
      setErrorInfo('Ocurrio un error al buscar la marca, por favor intente nuevamente');
    }
  };

  return (
    <main className="p-2">
      <div className="p-5 text-left text-grisOscuro text-2xl font-bold font-bungee dark:text-blanco">
        DATALENS
      </div>

      <div className="sm:p-10 xs:p-2 grid gap-4 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
        <div className="p-4 lg:col-span-4 sm:col-span-2 xs:col-span-1 ">
          <p className="text-justify font-semibold xl:text-base/loose sm:text-base sm:tracking-wide sm:leading-normal xs:text-xs font-exo">
            Bienvenido/a a nuestra plataforma de análisis de redes sociales. Aquí podrás explorar información valiosa sobre usuarios, palabras clave, hashtags y marcas en las principales plataformas sociales. Descubre insights únicos que te ayudarán a comprender mejor el panorama digital y a tomar decisiones estratégicas para tu negocio o proyecto. Comienza a navegar y aprovecha al máximo el poder de los datos sociales.
          </p>
        </div>

        <div className="lg:col-span-2 lg:col-start-2 sm:col-span-2 sm:row-span-2 xs:row-span-1 relative lg:h-[350px] sm:h-[200px] xs:h-[150px]">
          <Image
            src="/illustrations/main-illustration-1.svg"
            alt="Proyections"
            layout='fill'
            objectFit='contain'
          />
        </div>  
      </div>

      <div className="mt-10 p-5 text-left text-grisOscuro text-2xl font-bold flex items-center dark:text-blanco">
          <Icon icon="line-md:alert-circle-loop" className='me-1' height="2em" color="gray"/> Novedades
      </div>

      <div className="p-5 grid lg:grid-cols-2 lg:grid-rows-1 xs:grid-rows-2 xs:grid-cols-1 gap-5">

        <div className="bg-grisClaro dark:bg-negro40 p-5 rounded-xl xs:col-span-1">
            <div className="text-negroOscuro mb-5 text-center text-xl font-bold font-exo flex items-center dark:text-blanco">Nuevas Caracteristicas listas <Icon icon="line-md:bell-alert-loop" className='ms-1' height="2em" color="gray"/></div>

            <div className="p-5">
              <Slider {...settings} className="">
                <div>
                  <Link href={"/Xboard"}><Icon icon="line-md:twitter-x" className='me-1' height="2em" color="gray"/></Link>
                  <p className='text-justify m-3 font-exo'>
                      Agregamos una herramienta que te permitira consultar la informacion de un perfil de X.
                  </p>
                </div>
                <div>
                  <Link href={"/instagramBoard"}><Icon icon="line-md:instagram" className='me-1' height="2em" color="gray"/></Link>
                  <p className='text-justify m-3 font-exo'>
                      Ahora puedes obtener la informacion de un hastag de instagram.
                      Tambien puedes consultar la coincidencia del contenido mas publicado con una palabra en especifico.
                  </p>
                </div>
                <div>
                  <Link href={"/YoutubeBoard"}><Icon icon="line-md:youtube" className='me-1' height="2em" color="gray"/></Link>
                  <p className='text-justify m-3 font-exo'>
                    Hay una nueva herramienta que te devolvera las etiquetas mas buscadas a partir de una palabra clave.
                  </p>
                </div>
              </Slider>
            </div>

        </div>

          <div className="relative h-full w-full max-h-[400px] xs:col-span-1">
            <Image
              src="/illustrations/main-illustration-2.svg"
              alt="Proyections"
              layout='fill'
              objectFit='contain'
            />
          </div> 

      </div>


      <div className="mt-10 p-5 text-left text-grisOscuro text-2xl font-bold flex items-center dark:text-blanco">
          Searcher
      </div>

      <div className="sm:p-10 xs:p-2 grid gap-4 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">

          <p className="text-justify font-semibold font-exo xl:text-base/loose sm:text-base sm:tracking-wide sm:leading-normal xs:text-xs lg:col-span-4 sm:col-span-2 xs:col-span-1">
            Busca el contacto de la marca, empresa o persona que buscas y obtén información sobre su presencia en redes sociales.
          </p>

          <div className="lg:col-span-2 h-full w-full relative flex items-center justify-center">
            <form onSubmit={handleSubmit} className="p-5 grid gap-4 lg:grid-cols-8 lg:grid-rows-1 xs:grid-cols-1 xs:grid-rows-2">
              <input 
                type="text" 
                ref={inputRef}
                placeholder="Nombre de la marca"
                className="text-center p-2 w-full bg-grisClaro rounded-lg text-negroOscuro text-base font-bold lg:col-span-5 xs:col-span-1 xs:row-span-1"
              />
              <ButtonSPrimary type='submit' text='Buscar' className='bg-grisClaro col-span-12 lg:col-span-3 xs:col-span-1 xs:row-span-1'/>
            </form>
          </div>

      <div className="lg:col-span-2 flex justify-center items-center">

        <div className={`col-span-2 transition-all duration-500 ease-in-out transform-gpu ${errorInfo ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {errorInfo && (
            <div className="w-full p-3 bg-red-300 rounded-lg">
              <p className="text-center text-negroOscuro font-bold">{errorInfo}</p>
            </div>
          )}
        </div>

          <div className={`w-full transition-all duration-500 ease-in-out transform-gpu ${markData ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              {markData && (
                <div key={mark} className=" w-full p-3 bg-negroClaro dark:bg-negro40 dark:text-blanco rounded-lg grid gap-5 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-4 lg:grid-rows-1 place-items-center sm:grid-rows-4 sm:grid-cols-1 xs:grid-auto-rows:minmax(0, auto); xs:grid-cols-4">
                  {markData.result.twitter && <p><Link href={markData.result.twitter}><Icon icon="line-md:twitter-x" className='me-1' height="2em" color="gray"/></Link></p>}
                  {markData.result.instagram && <p><Link href={markData.result.instagram}><Icon icon="line-md:instagram" className='me-1' height="2em" color="gray"/></Link></p>}
                  {markData.result.facebook && <p><Link href={markData.result.facebook}><Icon icon="line-md:facebook" className='me-1' height="2em" color="gray"/></Link></p>}
                  {markData.result.tiktok && <p><Link href={markData.result.tiktok}><Icon icon="line-md:tiktok" className='me-1' height="2em" color="gray"/></Link></p>}
                  {markData.result.youtube && <p><Link href={markData.result.youtube}><Icon icon="line-md:youtube" className='me-1' height="2em" color="gray"/></Link></p>}
                  {markData.result.github && <p><Link href={markData.result.github}><Icon icon="line-md:github" className='me-1' height="2em" color="gray"/></Link></p>}
                  {markData.result.linkedin && <p><Link href={markData.result.linkedin}><Icon icon="entypo-social:linkedin" className='me-1' height="2em" color="gray"/></Link></p>}
                  {markData.result.snapchat && <p><Link href={markData.result.snapchat}><Icon icon="bxl:snapchat" className='me-1' height="2em" color="gray"/></Link></p>}
                  </div>
              )}
            </div>

          </div>
      </div>

    </main>
  );
}
