"use client"

import localFont from "next/font/local"
import { Icon } from "@iconify/react/dist/iconify.js";
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import Image from "next/image";
import { useState } from 'react';
import { Bar, Doughnut, Line } from "react-chartjs-2";
import sourceData from "@/data/sourceData.json";
import {ButtonLPrimary, ButtonSPrimary} from "@/components/buttons";




export default function Home() {

  const [likeColor, setLikeColor] = useState('white');
  const [dislikeColor, setDislikeColor] = useState('#34373B');

    const [mark, setMark] = useState('');
    const [markData, setMarkData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`api/contacts/${mark}`);
    const data = await response.json();

    setMarkData(data);
  };

  return (
    <main className="p-2">
      <div className="p-5 text-left text-grisOscuro text-2xl font-bold font-bungee">
        DATALENS
      </div>

      

      <div className="sm:p-10 xs:p-2 grid gap-4 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">

        <div className="p-4 lg:col-span-4 sm:col-span-2 xs:col-span-1 ">
          <p className="text-justify font-semibold italic xl:text-base/loose sm:text-base sm:tracking-wide sm:leading-normal xs:text-xs">
          "Bienvenido a nuestra plataforma de análisis de redes sociales. Aquí encontrarás una poderosa herramienta que te permitirá monitorizar y extraer datos valiosos de las principales plataformas de social media. Nuestro sistema de webscrapping avanzado te brindará información detallada sobre tendencias, sentimientos, interacciones y métricas clave para impulsar tus estrategias digitales."
          </p>
        </div>

        <div className="lg:col-span-2 sm:col-span-1 sm:row-span-2 xs:row-span-1 relative lg:h-[350px] sm:h-[200px] xs:h-[150px]">
          <Image
            src="/illustrations/main-illustration-1.svg"
            alt="Proyections"
            layout='fill'
            objectFit='contain'
          />
        </div>  

        <div className="lg:col-span-2 sm:col-span-1 sm:row-span-2 xs:row-span-1  grid grid-rows-2 gap-5">
          <div className="flex justify-center items-center">
            <ButtonLPrimary href="/Que-es?" text="Que es DataLens?" />
          </div>

          <div className="flex justify-center items-center">
            <ButtonLPrimary href="/herramientas" text="Herramientas" />
        </div>
        </div>
      </div>

      <div className="mt-10 p-5 text-left text-grisOscuro text-2xl font-bold flex items-center">
          <Icon icon="line-md:alert-circle-loop" className='me-1' height="2em" color="gray"/> Novedades
      </div>

      <div className="p-5 mt-5 grid lg:grid-cols-2 lg:grid-rows-1 xs:grid-rows-2 gap-5">

        <div className="bg-grisClaro p-5 rounded-xl">
            <div className="text-negroOscuro my-5 text-center text-xl font-bold flex items-center">Nuevas Caracteristicas listas <Icon icon="line-md:bell-alert-loop" className='ms-1' height="2em" color="gray"/></div>
            <p className="text-justify m-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque doloremque similique fuga dignissimos totam perferendis sequi nam, repellat impedit ipsa soluta quis delectus possimus sapiente esse corrupti at accusamus error.</p>
            
            
            <div className="flex justify-end mt-5">
                <button className="px-4 py-2 mr-2 bg-verde text-blanco rounded-lg flex justify-center items-center" onClick={() => setLikeColor(likeColor === 'white' ? '#52616B' : 'white')}>
                    <RiThumbUpFill className="mr-2" size={64} color={likeColor}/>
                </button>
                <button className="px-4 py-2 bg-rojo text-blanco rounded-lg flex justify-center items-center" onClick={() => setDislikeColor(dislikeColor === '#34373B' ? 'white' : '#34373B')}>
                    <RiThumbDownFill className="mr-2" size={64} color={dislikeColor}/>
                </button>
            </div>
        </div>

          <div className="relative h-full w-full max-h-[400px]">
            <Image
              src="/illustrations/main-illustration-2.svg"
              alt="Proyections"
              layout='fill'
              objectFit='contain'
            />
          </div> 

      </div>


      <div className="mt-10 p-5 text-left text-grisOscuro text-2xl font-bold flex items-center">
          Search Marca <Icon icon="line-md:search-filled" className='ms-1' height="30px" color="gray"/>
      </div>

      <div>
          <p className="sm:p-10 xs:p-2 grid gap-4 lg:grid-auto-rows:minmax(0, auto); lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
            Busca el contacto de la marca que buscas y obtén información sobre su presencia en redes sociales.
          </p>

          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={mark} 
              onChange={(e) => setMark(e.target.value)} 
              placeholder="Escribe el nombre de la marca"
            />
            <ButtonSPrimary type='submit' text='Buscar Contacto' className='bg-grisClaro col-span-12 lg:col-span-4 md:col-span-6 xs:col-span-2'/>
          </form>

          {markData && (
            <div>
              <p>Emails: {markData.emails}</p>
              <p>Phones: {markData.phones}</p>
              <p>LinkedIn: <a href={markData.linkedin}>{markData.linkedin}</a></p>
              <p>Twitter: <a href={markData.twitter}>{markData.twitter}</a></p>
              <p>Instagram: <a href={markData.instagram}>{markData.instagram}</a></p>
              <p>Snapchat: <a href={markData.snapchat}>{markData.snapchat}</a></p>
            </div>
          )}
      </div>

    </main>
  );
}
