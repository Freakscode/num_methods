import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/Homepage'
import Methods from './pages/Methods'

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
