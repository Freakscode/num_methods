import React, { useState } from 'react';

const Bisection = () => {
    const [expression, setExpression] = useState('');
    const [interval, setInterval] = useState({ a: 0, b: 0, x0: 0 });
    const [result, setResult] = useState<{ Roots: number[], Iterations: number[] } | null>(null);
    const [status, setStatus] = useState('Esperando operación...');

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
            <input type="text" value={expression} onChange={(e) => setExpression(e.target.value)} placeholder="Expression" />
            <input type="number" value={interval.a} onChange={(e) => setInterval({ ...interval, a: Number(e.target.value) })} placeholder="Interval Start" />
            <input type="number" value={interval.b} onChange={(e) => setInterval({ ...interval, b: Number(e.target.value) })} placeholder="Interval End" />
            <button onClick={solveBisection}>Solve</button>
            <p>{status}</p>
            {result !== null ? (
                <div>
                    <h2>Results</h2>
                    {result.Roots.length > 0 ? (
                        <div>
                            <p>Roots: {result.Roots.join(', ')}</p>
                            <p>Iterations: {result.Iterations.join(', ')}</p>
                        </div>
                    ) : (
                        <p>No se hallaron raíces en la cantidad de iteraciones especificadas</p>
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default Bisection;

