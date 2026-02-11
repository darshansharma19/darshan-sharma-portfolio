import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayName, setDisplayName] = useState('');
  const [displayTitle, setDisplayTitle] = useState('');
  const [showButtons, setShowButtons] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  const fullName = 'DARSHAN SHARMA';
  const fullTitle = 'FULL STACK DEV // AI ENGINEER';

  // Scramble text effect
  const scrambleText = (text: string, setText: (text: string) => void, delay: number = 0) => {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let iteration = 0;
    
    setTimeout(() => {
      const interval = setInterval(() => {
        setText(
          text
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (char === ' ') return ' ';
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2;
      }, 30);
    }, delay);
  };

  useEffect(() => {
    // Start scramble animations
    scrambleText(fullName, setDisplayName, 500);
    scrambleText(fullTitle, setDisplayTitle, 2000);
    
    setTimeout(() => setShowButtons(true), 3500);
    setTimeout(() => setShowScrollHint(true), 4500);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF0055]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#00F0FF]/30 to-transparent animate-scanline" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-title */}
        <div className="mb-6 opacity-0 animate-[fadeIn_0.5s_ease-out_0.3s_forwards]">
          <span className="font-mono text-sm text-[#00F0FF] tracking-widest">
            &lt;HELLO_WORLD /&gt;
          </span>
        </div>

        {/* Main Name */}
        <h1
          ref={nameRef}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          {displayName.split('').map((char, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-100 ${
                char === ' ' ? 'w-4' : ''
              } ${
                displayName === fullName
                  ? 'text-gradient hover:glow-text-cyan cursor-default'
                  : 'text-[#888]'
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Title */}
        <div className="h-8 mb-8">
          <p className="font-mono text-lg md:text-xl text-[#888] tracking-wider">
            {displayTitle.split('').map((char, index) => (
              <span
                key={index}
                className={`inline-block ${
                  displayTitle === fullTitle ? 'text-[#00F0FF]' : 'text-[#555]'
                }`}
              >
                {char}
              </span>
            ))}
          </p>
        </div>

        {/* Tagline */}
        <p className="text-[#888] text-base md:text-lg max-w-2xl mx-auto mb-10 opacity-0 animate-[fadeIn_0.8s_ease-out_2.5s_forwards]">
          Building intelligent systems that bridge the gap between 
          <span className="text-[#00F0FF]"> user experience</span> and{' '}
          <span className="text-[#FF0055]">complex backend logic</span>
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${
            showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            onClick={scrollToAbout}
            className="group relative px-8 py-4 bg-transparent border border-[#00F0FF] text-[#00F0FF] font-mono text-sm tracking-wider overflow-hidden transition-all duration-300 hover:text-[#050505]"
            data-cursor-hover
          >
            <span className="absolute inset-0 bg-[#00F0FF] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              VIEW PROJECTS
              <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 border border-[#222] text-[#888] font-mono text-sm tracking-wider hover:border-[#FF0055] hover:text-[#FF0055] transition-all duration-300"
            data-cursor-hover
          >
            CONTACT ME
          </button>
        </div>

        {/* Social Links */}
        <div
          className={`flex justify-center gap-6 mt-10 transition-all duration-700 delay-200 ${
            showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://github.com/darshansharma19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-[#00F0FF] transition-colors duration-300"
            data-cursor-hover
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/darshan-sharma-323422237/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-[#00F0FF] transition-colors duration-300"
            data-cursor-hover
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:darshusharma9755@gmail.com"
            className="text-[#555] hover:text-[#00F0FF] transition-colors duration-300"
            data-cursor-hover
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll Hint */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${
            showScrollHint ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs text-[#555] tracking-widest">
              [SCROLL TO INITIATE]
            </span>
            <ChevronDown size={20} className="text-[#00F0FF] animate-bounce" />
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-20 left-6 w-20 h-20 border-l border-t border-[#222]" />
      <div className="absolute bottom-20 right-6 w-20 h-20 border-r border-b border-[#222]" />
      
      {/* Decorative Code Snippets */}
      <div className="absolute top-32 right-10 font-mono text-xs text-[#333] hidden lg:block">
        <div>const developer = {'{'}</div>
        <div className="pl-4">name: "Darshan",</div>
        <div className="pl-4">passion: "Building",</div>
        <div className="pl-4">stack: ["React", "Node", "AI"]</div>
        <div>{'}'};</div>
      </div>
      
      <div className="absolute bottom-32 left-10 font-mono text-xs text-[#333] hidden lg:block">
        <div>while (alive) {'{'}</div>
        <div className="pl-4">eat();</div>
        <div className="pl-4">sleep();</div>
        <div className="pl-4 text-[#00F0FF]">code();</div>
        <div>{'}'}</div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
