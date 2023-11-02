import '../tailwind.css';
import linkedIn_logo from '../imgs/icons8-linkedin-64.png';
import github_logo from '../imgs/icons8-github-64.png';
import prof_foto from '../imgs/img.jpg';
import Navbar from '../components/Navbar.tsx';

function HomePage() {
    return (
        <div>
            <Navbar />

            <div className="w-full h-full bg-primary flex flex-col p-10">

                <div className="box-content bg-neutral rounded-xl p-5 md:p-10 lg:p-10 xl:p-10">
                    <div className="flex flex-col">
                        {/* Primera fila con 1 columna */}
                        <div className="flex justify-center">
                            <div className='rounded-xl bg-violet_1'>
                                <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl p-5 md:p-10 lg:p-10 xl:p-10 text-center font-sans">
                                    🧮 Métodos Numéricos y sus aplicaciones 🧮
                                </h1>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="text-2xl flex flex-col flex-1 items-center text-center p-5 md:p-10 lg:p-10 xl:p-10 font-sans">
                                <div className="text-2xl justify-center bg-violet_1 rounded-xl font-sans">¿Qué es un método numérico?</div>
                                <br>
                                </br>
                                <div className="text-lg px-5 md:px-10 lg:px-10 xl:px-10 py-3 justify-center">
                                    <p className='py-10 font-sans bg-violet_1 rounded-xl'>
                                        Son un conjunto de técnicas y algoritmos matemáticos utilizados para resolver problemas y realizar cálculos aproximados en diversos campos de la ciencia, la ingeniería, la informática y otras disciplinas. Estos métodos se utilizan cuando no es posible obtener soluciones exactas a través de métodos analíticos o cuando los cálculos exactos son prohibitivamente complejos.
                                    </p>
                                </div>
                            </div>
                            <div className="text-2xl flex-1 text-center items-center p-5 md:p-10 lg:p-10 xl:p-10">
                                <div className="text-2xl p-3 font-sans bg-violet_1 rounded-xl">¿Dónde se pueden aplicar?</div>
                                <div className="py-5 text-sm text-justify">
                                    <div className="p-2 font-sans bg-violet_1 rounded-xl">
                                        <ul>
                                            <li><strong> - Resolución de ecuaciones no lineales:</strong> Encontrar las raíces de ecuaciones no lineales, donde no es posible obtener soluciones analíticas directas.</li>
                                            <li><strong> - Interpolación y ajuste de datos:</strong> Estimar valores intermedios entre puntos de datos o encontrar una función que se ajuste a un conjunto de datos experimentales.</li>
                                            <li><strong> - Resolución de sistemas de ecuaciones lineales y no lineales:</strong> Encontrar soluciones a sistemas de ecuaciones, ya sean lineales o no lineales.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <br>
                                        </br>
                                    </div>
                                    <div className="p-2 font-sans bg-violet_1 rounded-xl">
                                        <ul>
                                            <li><strong> - Integración numérica:</strong> Aproximar el valor de integrales definidas, especialmente cuando no se puede encontrar una solución analítica.</li>
                                            <li><strong> - Diferenciación numérica:</strong> Calcular derivadas numéricas de funciones, lo que puede ser útil en el análisis de datos experimentales o simulaciones.</li>
                                            <li><strong> - Métodos de optimización:</strong> Encontrar valores óptimos de funciones de acuerdo con ciertos criterios, como minimizar costos o maximizar ganancias.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="text-2xl flex-1 text-center items-center p-5 md:p-10 lg:p-10 xl:p-10">
                                <div className="text-2xl p-3 font-sans bg-violet_1 rounded-xl">
                                    Solucionadores Disponibles:
                                </div>
                                <br>
                                </br>
                                <div className="text-lg px-5 py-3 bg-violet_1 rounded-xl font-sans">
                                    <ul>
                                        <li className="py-3"><a href="/methods/bisection">Bisección</a></li>
                                        <li className="py-3"><a href='/methods/False_Rule'>Regla Falsa</a></li>
                                        <li className="py-3"><a href='/methods/Secante'>Secante</a></li>
                                        <li className="py-3"><a href='/methods/Steffensen'>Steffensen</a></li>
                                        <li className="py-3"><a href='/methods/Newton-Raphson'>Newton-Raphson</a></li>
                                        <li className="py-3"><a href='/methods/Matrix'>Métodos matriciales (Gauss-Jordan)</a></li>
                                        <li className="py-3"><a href='/methods/Gradient'>Descenso del gradiente</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center flex-row md:flex-row lg:flex-row xl:flex-row m-10">
                            <div className="text-2xl p-5 flex flex-col md:flex-row lg:flex-row xl:flex-row ">
                                <div className="flex w-80 h-auto md:flex-row lg:flex-row xl:flex-row p-3 justify-end ">
                                    <img src={linkedIn_logo} alt="" className="w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/5 h-auto bg-violet_1 rounded-xl" />
                                </div>
                                <div className="flex md:flex-row lg:flex-row xl:flex-row w-3/4 md:w-4/5 lg:w-4/5 xl:w-4/5 text-center items-center">
                                    <a href="https://www.linkedin.com/in/freakscode/">in/freakscode/</a>
                                </div>
                            </div>
                            <div className="text-2xl p-5 flex flex-row">
                                <div className="flex w-80 md:flex-row lg:flex-row xl:flex-row p-3 justify-end">
                                    <img src={github_logo} alt="" className="w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/5 h-auto bg-violet_1 rounded-xl" />
                                </div>
                                <div className="flex md:flex-row lg:flex-row xl:flex-row w-3/4 md:w-4/5 lg:w-4/5 xl:w-4/5 px-5 text-center items-center">
                                    <a href="https://github.com/Freakscode">Freakscode</a>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-center flex-col md:flex-row lg:flex-row xl:flex-row ">
                            <div className="text-2xl p-5 flex flex-row">
                                <div className="flex p-3 text-center items-center">
                                    <img src={prof_foto} alt="Perfil" className="w-24 h-24 md:w-48 lg:w-48 xl:w-48 md:h-48 lg:h-48 xl:h-48 rounded-full p-3" />
                                </div>
                            </div>
                            <div className="text-2xl p-5 flex flex-row">
                                <div className="flex flex-1 p-3 text-center items-center">
                                    <div className="text-2xl p-3 bg-violet_1 rounded-xl">Asesor: <br /> Juan Carlos Briñez de Leo</div>
                                    <div className="text-2xl p-3 bg-violet_1 rounded-xl">Desarrollador: <br /> Gabriel Jaime Cardona Osorio</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
