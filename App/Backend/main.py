from fastapi import FastAPI
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from Methods import bisection, false_position, steffensen, newton_raphson
import logging
from fastapi.staticfiles import StaticFiles
from decouple import config

logging.basicConfig(level=logging.INFO, filename='app.log', format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

app = FastAPI(debug=True)

class expression(BaseModel):
    expression: str

class Interval(BaseModel):
    expression: str
    a: int
    b: int
    x0: int

# Configura CORS
origins = [
    "localhost:5173",
    "localhost:8000"# Reemplaza con la URL de tu frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
    expose_headers=["Content-Disposition"],
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
async def solve_method(id:int, interval: Interval):
    if id == 1:
        return bisection(interval.expression, [interval.a, interval.b])
    elif id == 2:
        return false_position(interval.expression, [interval.a, interval.b])
    elif id == 3:
        return steffensen(interval.expression, interval.x0)
    elif id == 4:
        return newton_raphson(interval.expression, interval.x0)