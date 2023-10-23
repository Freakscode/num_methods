import sympy as sp
from sympy import symbols, Eq, sin

def subintervals(main_interval, step):
    intervals = set()
    intervals.add(tuple(main_interval))

    while main_interval[0] < main_interval[1]:
        a, b = main_interval
        if a != 0 or b != 0:
            intervals.add((a, b))
        main_interval[0] = a + step
        main_interval[1] = b - step

    intervals = [list(interval) for interval in intervals]
    return intervals

def bisection(expression, main_interval, tolerance=1e-6, max_iterations=10000):
    variable = sp.symbols('x')
    expression = sp.sympify(expression)
    step = 10
    intervals = subintervals(main_interval, step)
    
    roots = []
    iterations = []
    
    for a, b in intervals:
        if a * b >= 0:
            raise ValueError(f"Bisection method requires f(a) and f(b) to have different signs in the interval [{a}, {b}].")
        
        for iteration in range(max_iterations):
            c = (a + b) / 2
            if abs(expression.subs(variable, c)) < tolerance:
                roots.append(c)
                iterations.append(iteration + 1)
                break
            if expression.subs(variable, a) * expression.subs(variable, c) < 0:
                b = c
            else:
                a = c
    
    if not roots:
        return ("No se hallaron raíces en la cantidad de iteraciones especificadas")
    
    return {'Roots' : roots, 'Iterations' : iterations}


def false_position(expression, intervals, tolerance=1e-6, max_iterations=15):
    variable = sp.symbols('x')
    expression = sp.sympify(expression)
    
    intervals = subintervals(intervals, 5)
    roots = []
    iterations = []
    
    for interval in intervals:
        a, b = interval
        fa = expression.subs(variable, a)
        fb = expression.subs(variable, b)
        print(interval)
        if fa * fb >= 0:
            continue
        
        for iteration in range(max_iterations):
            c = (a * fb - b * fa) / (fb - fa)
            fc = expression.subs(variable, c)
            print(f'iteration: {iteration}')
            if abs(fc) < tolerance:
                roots.append(c)
                iterations.append(iteration + 1)
                break
            
            if fa * fc < 0:
                b = c
                fb = fc
            else:
                a = c
                fa = fc
    
    if not roots:
        return ('No se encontraron raices con el método de regla falsa')
    
    return roots, iterations


def steffensen(expression, x0, tolerance=1e-3, max_iterations=5):
    variable = sp.symbols('x')
    expression = sp.sympify(expression)
    a = x0
    print('Inicio Steffensen')
    for iteration in range(max_iterations):
        print(f'iteration: {iteration}')
        x1 = expression.subs(variable, x0)
        x2 = expression.subs(variable, x1)
        denominator = x2 - 2 * x1 + x0 
        if abs(denominator) < tolerance:
            return x0, iteration + 1
        x = x0 - (x1 - x0) ** 2 / denominator
        if abs(x - x0) < tolerance:
            return x, iteration + 1
        x0 = x
    return ("La función no converge con el método Steffensen en el número de iteraciones especificado: " + str(max_iterations) + " iteraciones\n"
            + "El valor de x es: " + str(a) + " intenta con otro valor de x0")


def newton_raphson(expression, x0, tolerance=1e-6, max_iterations=10000):
    variable = sp.symbols('x')
    expression = sp.sympify(expression)
    for iteration in range(max_iterations):
        f_x0 = expression.subs(variable, x0)
        f_prime_x0 = sp.diff(expression, variable).subs(variable, x0)
        x = x0 - f_x0 / f_prime_x0
        if abs(x - x0) < tolerance:
            return {'Valor de la raíz' : (f'{x:.2f}'), 'Iteraciones': iteration + 1}
        x0 = x
    raise ValueError("Newton-Raphson method did not converge within the specified number of iterations.")


expression = "x**3 - 2*x**2 - 5"


intervals = [-30, 30]

#print(bisection(expression, intervals))
#print(false_position(expression, -10, 10))
#print(steffensen(expression, 5))
#print(newton_raphson(expression, 3))








