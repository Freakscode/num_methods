import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/Homepage.tsx'
import Methods from './pages/Methods.tsx'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<HomePage/>}/>
        <Route path ="/methods" element={<Methods/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
