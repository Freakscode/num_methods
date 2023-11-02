import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/Homepage.tsx'
import Methods from './pages/Methods.tsx'
import Bisection from './pages/bisection.tsx'
import False_Rule from './pages/false_rule.tsx'
import Secante from './pages/secante.tsx'
import Steffensen from './pages/steffensen.tsx'
import New_rap from './pages/Newton-Raphson.tsx'
import Matrix from './pages/matrix.tsx'
import Gradient from './pages/gradient.tsx'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<HomePage/>}/>
        <Route path ="/methods" element={<Methods/>}/>
        <Route path="/methods/Bisection" element = {<Bisection/>}/>
        <Route path='/methods/False_Rule' element = {<False_Rule/>}/>
        <Route path='/methods/Secante' element = {<Secante/>}/>
        <Route path='/methods/Steffensen' element = {<Steffensen/>}/>
        <Route path='/methods/Newton-Raphson' element = {<New_rap/>}/>
        <Route path='/methods/Matrix' element = {<Matrix/>}/>
        <Route path='/methods/Gradient' element = {<Gradient/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
