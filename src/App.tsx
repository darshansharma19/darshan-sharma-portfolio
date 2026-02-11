import { useEffect, useState, useRef } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#E0E0E0] overflow-x-hidden">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen />}

      {/* Custom Cursor - Desktop Only */}
      <CustomCursor />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main
        ref={mainRef}
        className={`relative z-10 transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-[#222] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-sm text-[#888]">
            <span className="text-[#00F0FF]">&gt;</span> Designed & Built by{' '}
            <span className="text-[#E0E0E0]">Darshan Sharma</span>
          </p>
          <p className="font-mono text-xs text-[#555] mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
