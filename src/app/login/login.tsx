import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('Login')

    return(

        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">

        </div>

        <div className="max-w-md w-full mx-auto">
            <div className="text-center font-medium">texto de afuera</div>
            <div className="text-3xl font-bold text-gray-900 mt-2 text-center font-exo">otra mamada</div>
        </div>

        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
            <form action="" className="space-y-6">
                <div>
                    <label htmlFor="" className="text-sm font-bold text-gray-600 block font-exo">Correo</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>

                <div>
                    <label htmlFor="" className="text-sm font-bold text-gray-600 block font-exo">Contrasena</label>
                    <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>

                <div>
                    <label htmlFor="" className="text-sm font-bold text-gray-600 block font-exo">Fuente</label>
                    <select name="" id="" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        <option value="youtube"></option>
                        <option value="pagina"></option>
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-300 rounded" />
                        <label htmlFor="" className="ml-2 text-sm text-gray-600 font-exo">Recuerdame</label>
                    </div>
                    <div>
                        <a href="" className="font-medium text-sm text-blue-500 font-exo">Olvide mi contrasena</a>
                    </div>
                </div>
                <div>
                    <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm font-exo">Enter</button>
                </div>
            </form>
        </div>

        

    );
}

export { App }