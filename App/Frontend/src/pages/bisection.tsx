import { useState } from 'react';
import Navbar from '../components/Navbar.tsx';
import Graph from '../components/CartPlane.tsx';


const Bisection = () => {
    const [expression, setExpression] = useState('');
    const [interval, setInterval] = useState({ a: 0, b: 0, x0: 0 });
    const [result, setResult] = useState<{ Roots: number[], Iterations: number[] } | null>(null);
    const [status, setStatus] = useState('Esperando operación...');
    console.log('Valor de expression:', expression);
    console.log('Tipo de dato de expression:', typeof expression);


    const solveBisection = async () => {
        setStatus('Procesando...');
        try {
            const response = await fetch('http://localhost:8000/methods/1/solve', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    expression: expression,
                    a: interval.a,
                    b: interval.b,
                    x0: interval.x0,
                }),
            });

            if (response.status === 422) {
                const errorData = await response.json();
                console.error('Error:', errorData.detail);
            } else {
                const data = await response.json();
                if (data && data.Roots) {
                    if (data.Roots.length === 0) {
                        // No se encontraron raíces, configurar el estado en null
                        setResult(null);
                    } else {
                        setResult(data);
                    }
                } else {
                    console.error('Datos de respuesta no válidos:', data);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div className='w-screen h-screen bg-primary grid grid-cols-2'>

                <div className='grid grid-rows-4 gap-4'>
                    <div className='flex justify-center items-center'>
                        <input className='border-2' type="text" value={expression} onChange={(e) => setExpression(e.target.value)} placeholder="Expression" />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex justify-center items-center'>
                            <input className='border-2 w-1/2 h-10' type="number" value={interval.a} onChange={(e) => setInterval({ ...interval, a: Number(e.target.value) })} placeholder="Interval Start" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <input className='border-2 w-1/2 h-10' type="number" value={interval.b} onChange={(e) => setInterval({ ...interval, b: Number(e.target.value) })} placeholder="Interval End" />
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='bg-blue-500 hover:bg-blue-700 h-10 w-1/2 text-white font-bold py-2 px-4 rounded-xl' onClick={solveBisection}>Solve</button>
                    </div>
                    <div className='flex justify-center items-center flex-wrap'>
                        <div className='w-1/2'>
                            {result !== null ? (
                                <div>
                                    <div>
                                        <p className='border-xl bg-violet_1 rounded-xl flex justify-center items-center'>Results</p>
                                    </div>
                                    <br />
                                    {result.Roots.length > 0 ? (
                                        <div>
                                            <div>
                                                <p className='border-xl bg-violet_1 rounded-xl flex justify-center items-center'>Roots: {result.Roots.join(', ')}</p>
                                            </div>
                                            <br />
                                            <div>
                                                <p className='border-xl bg-violet_1 rounded-xl flex justify-center items-center'>Iterations: {result.Iterations.join(', ')}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className='border-xl bg-violet_1 rounded-xl flex justify-center items-center'>No se hallaron raíces en la cantidad de iteraciones especificadas</p>
                                    )}
                                </div>
                            ) : null}
                        </div>
                        <div className='w-1/2 flex justify-center items-center'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                Generar Reporte
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="flex justify-center items-center min-h-screen">
                            <Graph expression={expression} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bisection;



