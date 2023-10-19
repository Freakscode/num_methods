function HomePage() {
    return (
        <div className="main">
            <div className="secondary">
                <div className="row">
                    <h1 className="items-center">Bienvenido a tu asistente de métodos numéricos: NumMet</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <h1 className="items-center">¿Qué es NumMet?</h1>
                        </div>
                        <p>
                            NumMet es una aplicación web que te ayudará a resolver problemas de métodos numéricos,
                            tales como:

                            <ul>
                                <li>Interpolación</li>
                                <li>Integración numérica</li>
                                <li>Resolución de sistemas de ecuaciones</li>
                                <li>Resolución de ecuaciones diferenciales</li>
                            </ul>
                        </p>
                    </div>
                    <div className="col">
                        <div className="row">
                            <h1>¿Qué métodos numéricos puedo utilizar?</h1>
                        </div>
                        <p>
                            <ul>
                                <li>Bisección</li>
                                <li>Regla Falsa</li>
                                <li>Secante</li>
                                <li>Steffensen</li>
                                <li>Newton-Raphson</li>
                                <li>Monte-Carlo Próximamente</li>
                            </ul>
                        </p>
                    </div>
                    <div className="col">
                        <div className="row">
                            <h1>¿Cómo funcionan los métodos numéricos?</h1>
                        </div>
                        <div className="row">
                            <p>
                                Los métodos numéricos son una serie de algoritmos que nos permiten resolver problemas
                                matemáticos de una manera aproximada, mediante el uso de computadoras.

                                En NumMet, puedes utilizar los métodos numéricos que desees, para resolver los problemas que
                                necesites. Para ello, solo debes seleccionar el método numérico que desees, y llenar los
                                campos que se te piden. Una vez hecho esto, NumMet te mostrará el resultado de la
                                aproximación, así como el error que se cometió en el proceso.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col"> {/* Contenido de la primera columna */} </div>
                    <div className="col"> {/* Contenido de la segunda columna */} </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;