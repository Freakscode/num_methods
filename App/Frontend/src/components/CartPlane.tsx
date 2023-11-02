import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import * as math from 'mathjs';

const Graph = ({ expression }) => {
    const [data, setData] = useState<{ x: number[]; y: number[]; type: string; mode: string; marker: { color: string } }[]>([]);

    useEffect(() => {
        if (expression && expression.trim() !== '') {
            try {
                const replacedExpression = expression.replace(/\*\*/g, '^');
                const func = math.compile(replacedExpression);
                const xValues = math.range(-10, 10, 0.1).toArray();
                const yValues = xValues.map((x) => func.evaluate({ x: x }));
    
                setData([
                    {
                        x: xValues,
                        y: yValues,
                        type: 'scatter',
                        mode: 'lines+points',
                        marker: { color: 'red' },
                    },
                ]);
            } catch (error) {
                console.error('Error al compilar la expresión:', error);
            };
        };
    }, [expression]);

    return (
        <Plot
            data={data}
            layout={{ width: 620, height: 420, title: 'Plot Equation' }}
        />
    );
};

export default Graph;