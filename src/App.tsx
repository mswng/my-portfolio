import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {
  const page = window.location.pathname === '/' ? <Home /> : <NotFound />

  return (
    <>
      <Navbar />
      {page}
      <Footer />
    </>
  )
}
