import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  
  const lines = [
    'INITIALIZING SYSTEM...',
    'LOADING MODULES...',
    'MOUNTING COMPONENTS...',
    'ESTABLISHING CONNECTION...',
    'READY.'
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Typewriter effect for lines
    if (currentLine < lines.length) {
      const line = lines[currentLine];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setText(line.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
            setText('');
          }, 300);
        }
      }, 30);

      return () => clearInterval(typeInterval);
    }
  }, [currentLine]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center">
      {/* Terminal Window */}
      <div className="w-full max-w-lg mx-4">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border border-[#222] border-b-0 rounded-t-lg">
          <div className="w-3 h-3 rounded-full bg-[#FF0055]" />
          <div className="w-3 h-3 rounded-full bg-[#FFB800]" />
          <div className="w-3 h-3 rounded-full bg-[#00F0FF]" />
          <span className="ml-4 font-mono text-xs text-[#666]">system_boot.exe</span>
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 bg-[#0a0a0a] border border-[#222] rounded-b-lg font-mono text-sm min-h-[200px]">
          {/* Previous Lines */}
          {lines.slice(0, currentLine).map((line, index) => (
            <div key={index} className="mb-2">
              <span className="text-[#00F0FF]">&gt;</span>{' '}
              <span className="text-[#888]">{line}</span>
            </div>
          ))}
          
          {/* Current Line */}
          {currentLine < lines.length && (
            <div className="mb-2">
              <span className="text-[#00F0FF]">&gt;</span>{' '}
              <span className="text-[#E0E0E0]">{text}</span>
              <span className="inline-block w-2 h-4 bg-[#00F0FF] ml-1 animate-blink" />
            </div>
          )}
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-xs text-[#666] mb-2">
              <span>LOADING PROGRESS</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1 bg-[#222] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#00F0FF] to-[#FF0055] transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="mt-4 flex gap-4 text-xs text-[#444]">
            <span>[MEM: OK]</span>
            <span>[CPU: OK]</span>
            <span>[GPU: OK]</span>
          </div>
        </div>
      </div>
      
      {/* Background Grid Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
