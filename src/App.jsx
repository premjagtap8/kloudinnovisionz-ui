import { Outlet, ScrollRestoration } from 'react-router-dom'
import './App.css'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footter from './components/Footter'
import WhatsAppWidget from './components/WhatsAppWidget'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footter />
      <WhatsAppWidget />
      <ScrollRestoration />
    </div>
  )
}

export default App