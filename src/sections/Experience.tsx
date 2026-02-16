import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'internship' | 'freelance';
}

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lineProgress, setLineProgress] = useState(0);

 const experiences: ExperienceItem[] = [
  {
    title: 'Trainee Software Developer',
    company: 'BluCursor Infotech',
    location: 'On-site',
    period: 'July 2025 – September 2025',
    description: [
      'Worked on AI-powered surveillance and real-time video analytics systems',
      'Developed and optimized pipelines using NVIDIA DeepStream SDK',
      'Built Python-based modules for real-time object detection, tracking, and event processing',
      'Integrated AI/ML inference models into scalable video processing workflows',
      'Improved system performance, latency, and resource efficiency for live video streams',
    ],
    technologies: ['Python', 'NVIDIA DeepStream', 'OpenCV', 'AI/ML', 'Docker', 'TensorFlow', 'PyTorch', 'React', 'Next.js', 'Node.js', 'TypeScript'],
    type: 'work',
  },
  {
    title: 'Python Code Evaluator',
    company: 'Outlier AI',
    location: 'Remote',
    period: 'January 2025 – June 2025',
    description: [
      'Evaluated and improved AI-generated Python code for correctness and efficiency',
      'Refined and validated 500+ Computer Science questions',
      'Identified logical inconsistencies and edge-case failures',
      'Provided structured technical feedback to improve model outputs',
    ],
    technologies: ['Python', 'AI/ML', 'TensorFlow', 'PyTorch'],
    type: 'freelance',
  },
  {
    title: 'API & Pipeline Evaluator',
    company: 'Aligner',
    location: 'Remote',
    period: 'January 2025 – Ongoing',
    description: [
      'Evaluated AI APIs and data pipelines for performance and reliability',
      'Conducted structured testing to ensure robustness under various workloads',
      'Analyzed response accuracy, latency, and scalability metrics',
      'Contributed to quality assurance for AI-driven systems',
    ],
    technologies: ['Python', 'AI/ML', 'Docker'],
    type: 'freelance',
  },
];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate timeline line
          setTimeout(() => {
            setLineProgress(100);
          }, 300);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return '#00F0FF';
      case 'freelance':
        return '#FF0055';
      case 'internship':
        return '#FFB800';
      default:
        return '#00F0FF';
    }
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF0055]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-mono text-sm text-[#00F0FF] tracking-widest mb-4 block">
            &lt;CAREER_LOG /&gt;
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#E0E0E0] mb-4">
            WORK <span className="text-gradient">EXPERIENCE</span>
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto">
            A journey through professional growth, from internships to leading development projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#222] md:-translate-x-px">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#00F0FF] via-[#FF0055] to-[#00F0FF] transition-all duration-2000 ease-out"
              style={{ height: `${lineProgress}%` }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const color = getTypeColor(exp.type);

              return (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className={`relative flex items-start gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    transitionDuration: '700ms',
                  }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10">
                    <div 
                      className="w-full h-full rounded-full border-2 bg-[#050505] transition-all duration-300 hover:scale-150"
                      style={{ borderColor: color }}
                    />
                    <div 
                      className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{ backgroundColor: color }}
                    />
                  </div>

                  {/* Content Card */}
                  <div 
                    className={`ml-12 md:ml-0 md:w-[calc(50%-40px)] ${
                      isLeft ? 'md:pr-0 md:text-right' : 'md:pl-0 md:text-left'
                    }`}
                  >
                    <div 
                      className="group relative bg-[#111] border border-[#222] rounded-lg p-6 hover:border-[#00F0FF] transition-all duration-300"
                      style={{ 
                        borderColor: undefined,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#222';
                      }}
                    >
                      {/* Type Badge */}
                      <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                        <span 
                          className="px-2 py-0.5 text-xs font-mono rounded border"
                          style={{ 
                            color, 
                            borderColor: `${color}40`,
                            backgroundColor: `${color}10`
                          }}
                        >
                          {exp.type.toUpperCase()}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-xl font-semibold text-[#E0E0E0] mb-1">
                        {exp.title}
                      </h3>

                      {/* Company */}
                      <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                        <Briefcase size={14} className="text-[#666]" />
                        <span className="text-[#00F0FF] font-medium">{exp.company}</span>
                      </div>

                      {/* Meta Info */}
                      <div className={`flex flex-wrap items-center gap-4 mb-4 text-sm text-[#666] ${isLeft ? 'md:justify-end' : ''}`}>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span className="font-mono">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className={`space-y-2 mb-4 ${isLeft ? 'md:text-right' : ''}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-[#888] text-sm leading-relaxed flex items-start gap-2">
                            <span className="text-[#00F0FF] mt-1">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-[#0a0a0a] border border-[#222] rounded text-xs font-mono text-[#666] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Hover Effect Corner */}
                      <div 
                        className="absolute top-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ 
                          background: `linear-gradient(135deg, transparent 50%, ${color}30 50%)` 
                        }}
                      />
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
