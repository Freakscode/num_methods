import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/Homepage.tsx'
import Methods from './pages/Methods.tsx'
import Bisection from './pages/bisection.tsx'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<HomePage/>}/>
        <Route path ="/methods" element={<Methods/>}/>
          <Route path="/methods/Bisection" element = {<Bisection/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
