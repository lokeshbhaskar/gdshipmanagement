import { Route, Routes } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import { lazy, Suspense } from 'react';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Commercial = lazy(() => import("./pages/Commercial"));
const Technical = lazy(() => import("./pages/Technical"));
const Crew = lazy(() => import("./pages/Crew"));
const Consultancy = lazy(() => import("./pages/Consultancy"));

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/commercial-management' element={<Commercial />} />
          <Route path='/technical-management' element={<Technical />} />
          <Route path='/crew-management' element={<Crew />} />
          <Route path='/consultancy-services' element={<Consultancy />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
