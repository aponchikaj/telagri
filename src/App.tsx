import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home/home'
import Solutions from './pages/solutions/solutions'
import About from './pages/about/about'
import News from './pages/news/news'
import Contact from './pages/contact/contact'
import PageNotFound from './pages/pageNotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/solutions" element={<Solutions/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}