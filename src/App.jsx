import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'

function App() {
  return (
    // Routes is the container that holds all our route definitions
    <Routes>
      {/* Route for landing page — loads when URL is "/" */}
      <Route path="/" element={<LandingPage />} />

      {/* Route for auth page — loads when URL is "/auth" */}
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  )
}

export default App