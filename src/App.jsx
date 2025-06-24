
import { Routes, Route} from 'react-router-dom'
import Navbar from './Compnenets/Navbar/Navbar'
import Home from './pages/Home'
import News from './pages/News'
import Technology from './pages/Technlogy'
import Business from './pages/Business'
import Sports from './pages/Sports'
import Footer from './Compnenets/Navbar/Footer'
import Politics from './pages/Politics'
import Health from './pages/Health'
import World from './pages/World'
import Fashion from './pages/Fasion'
import Entertainment from './pages/Entertainement'
import { useRef } from 'react'

function App() {
  const subscribeRef = useRef(null);
  const scrollToSubscribe = () => {
    subscribeRef.current?.scrollIntoView({behaviour:'smooth'});
  }
  return (
    <>
      <Navbar scrollToSubscribe={scrollToSubscribe}/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/news" element={<News/>}></Route>
          <Route path="/tech" element={<Technology/>}></Route>
          <Route path="/business" element={<Business/>}></Route>
          <Route path="/sports" element={<Sports/>}></Route>
          <Route path="/politics" element={<Politics/>}></Route>
          <Route path="/entertainment" element={<Entertainment/>}></Route>
          <Route path="/fashion" element={<Fashion/>}></Route>
          <Route path="/world" element={<World/>}></Route>
          <Route path="/health" element={<Health/>}></Route>
        </Routes>
      <Footer ref={subscribeRef}/>
    </>
  )
}

export default App
