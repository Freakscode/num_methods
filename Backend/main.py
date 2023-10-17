from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from Methods import bisection, false_position, steffensen, newton_raphson

app = FastAPI()

class expression(BaseModel):
    expression: str

class Interval(BaseModel):
    expression: str
    a: int
    b: int
    x0: int

# Configure CORS
origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.title = "Metodos Numericos"

methods = [{'id': 1,
           'Metodo':'Bisección'
           },
          {'id': 2,
           'Metodo':'Regla Falsa'
           },
          {'id':3,
           'Metodo':'Steffensen'
           }, 
          {'id':4,
           'Metodo':'Newton-Raphson'
           }]

# Define routes
@app.get("/", tags=["Root"])
def root():
    return HTMLResponse(content="<h1>Metodos Numericos</h1>")

@app.get('/methods', tags = ['Methods'])
def get_methods():
    return methods

@app.get('/methods/{id}', tags = ['Methods'])
def get_method(id:int):
    for item in methods:
        if item['id'] == id:
            return item
    return []

#@app.get('/methods/{id}/help', tags = ['Methods'])

@app.post('/methods/{id}/solve', tags = ['Methods'])
def solve_method(id:int, interval: Interval):
    if id == 1:
        return bisection(interval.expression, [interval.a, interval.b])
    elif id == 2:
        return false_position(interval.expression, [interval.a, interval.b])
    elif id == 3:
        return steffensen(interval.expression, interval.x0)
    elif id == 4:
        return newton_raphson(interval.expression, interval.x0)