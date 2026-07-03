import React, { Suspense } from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'

const ThreeBackground = React.lazy(() => import('./components/ThreeBackground/ThreeBackground'));

function App() {
  return (
    <>
      <div className="bg-[#050404] min-h-screen overflow-hidden">
        {/* Three.js Animated Background */}
        <Suspense fallback={null}>
          <ThreeBackground />
        </Suspense>

        {/* Subtle grid overlay */}
        <div className='fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-[1]'></div>

        {/* Main content */}
        <div className='relative z-[2] pt-8'>
          <NavBar />
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
