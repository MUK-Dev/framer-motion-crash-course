import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import First from './Pages/First'
import Second from './Pages/Second'

import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<First />} />
          <Route path='/second' element={<Second />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
