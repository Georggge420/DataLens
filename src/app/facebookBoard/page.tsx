"use client"

import React from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import sourceData from "@/data/facebookData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = false;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

export default function facebookBoard() {
  return (
    <div className='p-2'>
        <div className="p-5 text-left text-grisOscuro text-2xl font-bold">
          Facebook
        </div>

        <div className="p-5 grid grid-rows-4 grid-cols-12 gap-3"> 

            <div className="bg-blancoClaro row-start-2 row-span-2 col-span-7 grid grid-cols-2 rounded-3xl p-6 gap-4">
                <div className="bg-blancoOpaco rounded-2xl">
                    <div className="mt-5 p-3 text-center text-negroOscuro text-lg font-bold">
                        Usuarios masculinos
                    </div>

                  <div className='mb-10 flex justify-center items-center'>
                  <Doughnut
                      data={{
                        labels: sourceData.map((data) => data.label),
                        datasets: [
                          {
                            label: "Count",
                            data: sourceData.map((data) => data.value),
                            backgroundColor: [
                              "#E1E4E6",
                              "#788189",
                            ],
                            borderRadius: 5,
                          },
                        ],
                      }}
                      options={{
                        plugins: {
                          title: {
                            text: "",
                          },
                        },
                      }}
                    />  
                  </div>

                  <div className=' bg-grisClaro mx-20 my-5 p-5 rounded-xl'>
                    <p className="text-center w-full">Total de usuraios</p>
                    <p className="text-center w-full">745793</p>
                  </div>
                </div>

                <div className="bg-blancoOpaco rounded-2xl">
                    graph2
                </div>
            </div>

            <div className="bg-blancoClaro row-span-4 col-span-5 rounded-3xl p-4">
                calendario
            </div>
        </div>
      
    </div>
  )
}
