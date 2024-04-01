"use client"

import { Icon } from "@iconify/react/dist/iconify.js";
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { Chart, LinearScale, CategoryScale, PointElement, LineElement} from 'chart.js';
import { Bar, Doughnut, Line } from "react-chartjs-2";
import sourceData from "@/data/sourceData.json";


Chart.register(LinearScale, CategoryScale, PointElement, LineElement);


export default function Home() {

  const [likeColor, setLikeColor] = useState('white');
  const [dislikeColor, setDislikeColor] = useState('#34373B');



  
  return (
    <main className="p-2">
      <div className="p-5 text-left text-grisOscuro text-2xl font-bold">
          DATALENS
      </div>

      <div className="p-4">
        <p className="text-justify font-semibold italic text-base/loose">
        "Bienvenido a nuestra plataforma de análisis de redes sociales. Aquí encontrarás una poderosa herramienta que te permitirá monitorizar y extraer datos valiosos de las principales plataformas de social media. Nuestro sistema de webscrapping avanzado te brindará información detallada sobre tendencias, sentimientos, interacciones y métricas clave para impulsar tus estrategias digitales."
        </p>
      </div>

      <div className="me-6 ms-10 ps-36 grid grid-rows-2 grid-cols-3 gap-4 md:h-[400px]">

        <div className="row-span-2 col-span-1 relative">
          <Image
            src="/illustrations/main-illustration-1.svg"
            alt="Proyections"
            layout='fill'
            objectFit='contain'
          />
        </div>  

        <div className="me-36 py-20 pr-36 row-span-2 col-span-2 grid grid-rows-2 gap-5">
          <div className="flex justify-start items-star">
            <Link href="/Que-es?" className="justify-items-center md:w-full w-auto">
              <button className="px-4 py-2 bg-blancoOpaco text-negroOscuro rounded-lg md:w-full w-auto h-auto md:h-20 text-2xl font-bold">
                Que es DataLens?
              </button>
            </Link>
          </div>

          <div className="flex justify-start items-start">
            <Link href="/Herramientas" className="justify-items-center md:w-full w-auto">
              <button className="px-4 py-2 bg-blancoOpaco text-negroOscuro rounded-lg md:w-full w-auto h-auto md:h-20 text-2xl font-bold">
                Herramientas de DataLens
              </button>
            </Link>
        </div>
        </div>
      </div>

      <div className="mt-10 p-5 text-left text-grisOscuro text-2xl font-bold">
          Novedades
      </div>

      <div className="p-5 mt-5 grid grid-cols-2 gap-5">
        <div className="bg-grisClaro p-5 rounded-xl">
            <div className="text-negroOscuro my-5 text-center text-xl font-bold">Nuevas Caracteristicas listas</div>
            <p className="text-justify m-3">Agregamos una nueva grafica que puede ayudarte a identificar tendencias en el apartado en: <Link href="/facebookBoard" className="hover:text-white">Facebook</Link>, <Link href="Xboard"className="hover:text-white"> X </Link>  e <Link href="instragramBoard" className="hover:text-white">Instagram</Link>.</p>
            <p className="text-justify m-3">Nueva herramienta para identificar el tipo de usuario que consume cierta musica en: <Link href="/spotifyBoard" className="hover:text-white">Spotify</Link> </p>
            <p className="text-justify m-3">"¡Nuevas funcionalidades a la vista! En nuestra última actualización, hemos implementado un módulo de análisis de sentimientos mejorado. Ahora podrás obtener insights más precisos sobre las emociones y actitudes de los usuarios hacia tu marca, productos o campañas en las redes sociales. ¡Descubre qué están diciendo realmente tus clientes!"</p>
            
            <div className="flex justify-end mt-5">
                <button className="px-4 py-2 mr-2 bg-verde text-blanco rounded-lg flex justify-center items-center" onClick={() => setLikeColor(likeColor === 'white' ? '#52616B' : 'white')}>
                    <RiThumbUpFill className="mr-2" size={64} color={likeColor}/>
                </button>
                <button className="px-4 py-2 bg-rojo text-blanco rounded-lg flex justify-center items-center" onClick={() => setDislikeColor(dislikeColor === '#34373B' ? 'white' : '#34373B')}>
                    <RiThumbDownFill className="mr-2" size={64} color={dislikeColor}/>
                </button>
            </div>
        </div>

        <div className="relative">
          <Image
            src="/illustrations/main-illustration-2.svg"
            alt="Proyections"
            layout='fill'
            objectFit='contain'
          />
        </div> 
      </div>


      <div className="mt-10 p-5 text-left text-grisOscuro text-2xl font-bold">
          Actividad de nuestros usuarios
      </div>
      
      <div className="p-5 flex justify-center items-center h-96">
      <Line
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Actividad de usuarios",
                data: sourceData.map((data) => data.value),
                backgroundColor: "#F0F5F9",
                borderColor: "#333333",
              }
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
      </div>
      

    </main>
  );
}
