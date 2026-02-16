import { useEffect, useRef, useState } from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Briefcase, value: '1+', label: 'Years Experience', color: '#00F0FF' },
    { icon: Award, value: '15+', label: 'Projects Completed', color: '#FF0055' },
    { icon: GraduationCap, value: '9.0', label: 'CGPA', color: '#00F0FF' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00F0FF]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-mono text-sm text-[#00F0FF] tracking-widest mb-4 block">
            &lt;ABOUT_ME.exe /&gt;
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#E0E0E0]">
            WHO AM <span className="text-gradient">I?</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Holographic Frame */}
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Glowing Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00F0FF] via-[#FF0055] to-[#00F0FF] rounded-lg opacity-50 blur-sm animate-pulse" />
              
              {/* Main Image Container */}
              <div className="relative h-full bg-[#111] rounded-lg overflow-hidden border border-[#222] terminal-border">
                {/* Scanline Overlay */}
                <div className="absolute inset-0 pointer-events-none z-10">
                  <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#00F0FF]/30 to-transparent animate-scanline" />
                </div>
                
                {/* Image */}
                <img
                  src="/profile.jpeg"
                  alt="Darshan Sharma"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00F0FF]/10 via-transparent to-[#FF0055]/10 pointer-events-none" />
                
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#00F0FF]" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#FF0055]" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#111] border border-[#222] px-4 py-2 rounded-lg">
                <span className="font-mono text-xs text-[#00F0FF]">AVAILABLE FOR WORK</span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Bio Text */}
            <div className="space-y-6 mb-10">
              <p className="text-lg text-[#888] leading-relaxed">
                I am a <span className="text-[#E0E0E0] font-medium">Computer Science graduate</span> with a specialization in{' '}
                <span className="text-[#00F0FF]">Data Science</span>, passionate about building intelligent systems that make a difference.
              </p>
              
              <p className="text-[#888] leading-relaxed">
                With expertise spanning from <span className="text-[#E0E0E0]">React frontends</span> to{' '}
                <span className="text-[#E0E0E0]">Python AI pipelines</span>, I bridge the gap between user experience and complex backend logic. My work focuses on creating scalable, efficient, and visually striking digital solutions.
              </p>
              
              <p className="text-[#888] leading-relaxed">
                Currently, I&apos;m working with <span className="text-[#FF0055]">NVIDIA DeepStream SDK</span> on AI-powered surveillance systems, combining my love for computer vision and real-time video analytics.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`relative p-4 bg-[#111] border border-[#222] rounded-lg group hover:border-[${stat.color}] transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${600 + index * 100}ms`,
                    borderColor: undefined,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = stat.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#222';
                  }}
                >
                  <stat.icon 
                    size={20} 
                    className="mb-2 transition-colors duration-300"
                    style={{ color: stat.color }}
                  />
                  <div 
                    className="font-heading text-2xl md:text-3xl font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-[#666] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Preview */}
            <div className="mt-8">
              <span className="font-mono text-xs text-[#555] tracking-wider mb-3 block">
                CORE TECHNOLOGIES
              </span>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'AI/ML', 'PostgreSQL', 'MongoDB'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#111] border border-[#222] rounded text-xs font-mono text-[#888] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
