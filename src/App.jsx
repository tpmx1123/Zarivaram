import HomePage from './pages/HomePage'
import StorePage from './pages/StorePage'
import AllSareesPage from './pages/AllSareesPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/store/collections/all" element={<AllSareesPage />} />
    </Routes>
  )
}

export default App
